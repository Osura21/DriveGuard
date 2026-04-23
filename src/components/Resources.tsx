import React, { useState } from "react";
import { Download, FileText, Loader2, Presentation } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import JSZip from "jszip";
import { saveAs } from "file-saver";

type IconType = typeof FileText;

type Item = {
  name: string;
  icon: IconType;
  url: string;
};

const assetUrl = (path: string) => `${import.meta.env.BASE_URL}${path}`;

const slugify = (value: string) =>
  value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)+/g, "")
    .trim();

const Resources: React.FC = () => {
  const documents: Item[] = [
    { name: "TAF Evaluation Merged Document", icon: FileText, url: assetUrl("resources/taf-evaluation-merged.pdf") },
    { name: "Topic Assessment Form - 25-26J-291", icon: FileText, url: assetUrl("resources/taf-25-26j-291.pdf") },
    { name: "Proposal Report - IT22134226", icon: FileText, url: assetUrl("resources/proposal-it22134226.pdf") },
    { name: "Proposal Report - IT22211514", icon: FileText, url: assetUrl("resources/proposal-it22211514.pdf") },
    { name: "Proposal Report - IT22255860", icon: FileText, url: assetUrl("resources/proposal-it22255860.pdf") },
    { name: "Proposal Report - IT22257468", icon: FileText, url: assetUrl("resources/proposal-it22257468.pdf") },
  ];

  const presentations: Item[] = [
    { name: "Proposal Presentation - 25-26J-291", icon: Presentation, url: assetUrl("resources/proposal-presentation.pdf") },
    { name: "Progress Presentation 1", icon: Presentation, url: assetUrl("resources/progress-presentation-1.pdf") },
    { name: "Progress Presentation 2", icon: Presentation, url: assetUrl("resources/progress-presentation-2.pdf") },
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
        zip.file(filenameFromUrl || `${slugify(item.name)}.pdf`, blob);
      }

      const content = await zip.generateAsync({ type: "blob" });
      saveAs(content, "DriveGuard-Resources.zip");
    } catch (error) {
      console.error(error);
      alert("Some files could not be downloaded. Please check that all PDF files exist in public/resources.");
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
    <Card className="border-2 transition-all duration-300 hover:border-primary hover:shadow-xl animate-scale-in">
      <CardHeader>
        <CardTitle className="text-2xl flex items-center gap-3">
          <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${gradient} flex items-center justify-center`}>
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
          {items.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.name}
                className="flex items-center justify-between gap-3 rounded-lg bg-muted/50 p-3 transition-colors hover:bg-muted group"
              >
                <div className="flex min-w-0 items-center gap-3">
                  <Icon className="h-5 w-5 flex-shrink-0 text-primary" />
                  <span className="text-sm font-medium">{item.name}</span>
                </div>
                <Button
                  asChild
                  size="sm"
                  variant="ghost"
                  className="flex-shrink-0 transition-all group-hover:bg-primary group-hover:text-white"
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
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary mb-3">Project Files</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Research <span className="text-primary">Resources</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Download DriveGuard reports, assessment documents, and progress presentations.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <ResourceCard title="Documents" items={documents} gradient="from-primary to-primary-glow" />
          <ResourceCard title="Presentations" items={presentations} gradient="from-indigo-500 to-cyan-500" />
        </div>

        <div className="mt-12 text-center animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
          <p className="text-muted-foreground mb-6">
            All available DriveGuard documents are stored in PDF format for easy evaluation.
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
                Preparing ZIP...
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
