import React, { useState } from "react";
import { FileText, Presentation, Download, Loader2 } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import JSZip from "jszip";
import { saveAs } from "file-saver";

type IconType = typeof FileText;

type Item = {
  name: string;
  icon: IconType;
  url: string; // public URL to the PDF
};

const slugify = (s: string) =>
  s
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)+/g, "")
    .trim();

const Resources: React.FC = () => {
  // Place your PDFs in /public/resources and keep the filenames below in sync
  const documents: Item[] = [
    { name: "Topic Assessment Form", icon: FileText, url: "/neuro-ride-hub/resources/topic-assessment-form.pdf" },
    { name: "Project Proposal - IT21389924", icon: FileText, url: "/neuro-ride-hub/resources/proposal-it21389924.pdf" },
    { name: "Project Proposal - IT21269820", icon: FileText, url: "/neuro-ride-hub/resources/proposal-it21269820.pdf" },
    { name: "Project Proposal - IT21251382", icon: FileText, url: "/neuro-ride-hub/resources/proposal-it21251382.pdf" },
    { name: "Project Proposal - IT21274534", icon: FileText, url: "/neuro-ride-hub/resources/proposal-it21274534.pdf" },
    { name: "Final Report", icon: FileText, url: "/neuro-ride-hub/resources/final-report.pdf" },
    { name: "Research Paper", icon: FileText, url: "/neuro-ride-hub/resources/research-paper.pdf" },
  ];
  

  const presentations: Item[] = [
    { name: "Proposal Presentation", icon: Presentation, url: "/neuro-ride-hub/resources/proposal-presentation.pdf" },
    { name: "Progress Presentation-1", icon: Presentation, url: "/neuro-ride-hub/resources/progress-presentation-1.pdf" },
    { name: "Progress Presentation-2", icon: Presentation, url: "/neuro-ride-hub/resources/progress-presentation-2.pdf" },
  ];

  const allItems: Item[] = [...documents, ...presentations];
  const [zipping, setZipping] = useState(false);

  const handleDownloadAll = async () => {
    try {
      setZipping(true);
      const zip = new JSZip();

      for (const item of allItems) {
        const res = await fetch(item.url);
        if (!res.ok) throw new Error(`Failed to fetch ${item.url}`);
        const blob = await res.blob();
        const filenameFromUrl = item.url.split("/").pop();
        const safeName = filenameFromUrl || `${slugify(item.name)}.pdf`;
        zip.file(safeName, blob);
      }

      const content = await zip.generateAsync({ type: "blob" });
      saveAs(content, "NeuroRide-Resources.zip");
    } catch (e) {
      console.error(e);
      alert("Some files could not be downloaded. Please check that all PDF URLs are correct.");
    } finally {
      setZipping(false);
    }
  };

  const ResourceCard = ({
    title,
    items,
    gradient,
  }: {
    title: string;
    items: Item[];
    gradient: string;
  }) => (
    <Card className="border-2 hover:border-primary transition-all duration-300 animate-scale-in">
      <CardHeader>
        <CardTitle className="text-2xl flex items-center gap-3">
          <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${gradient} flex items-center justify-center`}>
            {items[0].icon === FileText ? (
              <FileText className="h-6 w-6 text-white" />
            ) : (
              <Presentation className="h-6 w-6 text-white" />
            )}
          </div>
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {items.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={item.name}
                className="flex items-center justify-between p-3 rounded-lg bg-muted/50 hover:bg-muted transition-colors group"
              >
                <div className="flex items-center gap-3">
                  <Icon className="h-5 w-5 text-primary" />
                  <span className="text-sm font-medium">{item.name}</span>
                </div>
                <Button
                  asChild
                  size="sm"
                  variant="ghost"
                  className="group-hover:bg-primary group-hover:text-white transition-all"
                >
                  <a href={item.url} download aria-label={`Download ${item.name}`}>
                    <Download className="h-4 w-4" />
                  </a>
                </Button>
              </div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );

  return (
    <section id="resources" className="py-20 bg-gradient-to-b from-muted/30 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-primary">Resources</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Access our research documents and presentations
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <ResourceCard title="Documents" items={documents} gradient="from-primary to-primary-glow" />
          <ResourceCard title="Presentations" items={presentations} gradient="from-orange-500 to-amber-500" />
        </div>

        <div className="mt-12 text-center animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
          <p className="text-muted-foreground mb-6">
            All documents are available in PDF format and can be downloaded for detailed review.
          </p>
          <Button
            size="lg"
            onClick={handleDownloadAll}
            disabled={zipping}
            className="bg-primary hover:bg-primary/90 text-primary-foreground"
          >
            {zipping ? (
              <>
                <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                Preparing ZIP…
              </>
            ) : (
              <>
                <Download className="mr-2 h-5 w-5" />
                Download All Resources
              </>
            )}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Resources;
