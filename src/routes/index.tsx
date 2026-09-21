import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, CheckCircle2, FileSearch, Languages, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionHeading, Wordmark } from "@/components/app-shell";
import { StandardResultCard } from "@/components/standard-result";
import { searchResults } from "@/lib/standards";

export const Route = createFileRoute("/")({
  head: () => ({ meta: [
    { title: "StandardOS — From Tender Document to Certified Standard" },
    { name: "description", content: "Find relevant Indian Standards in seconds with multilingual search and clause-level citations." },
    { property: "og:title", content: "StandardOS — Indian Standards, explained" },
    { property: "og:description", content: "AI-assisted BIS discovery with exact, explainable clause citations." },
    { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
  ]}), component: HomePage,
});

function HomePage() {
  return <>
    <section className="page-wrap grid min-h-[calc(100vh-6rem)] items-center gap-10 py-12 lg:grid-cols-[1.02fr_.98fr] lg:py-20">
      <div className="reveal max-w-2xl"><p className="eyebrow">Intelligence for Indian Standards</p><h1 className="mt-5 font-serif text-5xl leading-[1.06] text-primary sm:text-6xl lg:text-7xl">From tender document to certified standard, in seconds—not weeks.</h1><p className="mt-6 max-w-xl text-lg leading-8 text-muted-foreground">StandardOS reads specifications in English or Hindi, ranks relevant BIS standards, and traces every recommendation to an exact clause.</p><div className="mt-8 flex flex-wrap gap-3"><Button asChild size="lg"><Link to="/search">Search standards <ArrowRight /></Link></Button><Button asChild size="lg" variant="outline"><Link to="/about">Read our methodology</Link></Button></div><p className="mt-5 flex items-center gap-2 text-sm text-muted-foreground"><CheckCircle2 className="size-4 text-accent-foreground" /> Explainable by design. Every match carries evidence.</p></div>
      <div className="reveal relative lg:pl-6"><div className="absolute -left-2 top-10 hidden h-32 w-px bg-accent-foreground lg:block"/><div className="glass-panel ruled-bg p-4 sm:p-6"><div className="flex items-center justify-between border-b border-border pb-4"><span className="text-sm font-semibold text-primary">Tender query · Electrical works</span><span className="eyebrow">0.8 sec</span></div><p className="my-5 font-serif text-lg leading-7 text-primary">“Supply and installation of 1.1 kV PVC-insulated copper wiring with overload protection and continuous earthing…”</p><StandardResultCard result={searchResults[0]} compact /></div></div>
    </section>

    <section className="border-y border-border bg-background/35 py-20"><div className="page-wrap"><SectionHeading eyebrow="A verifiable process" title="A document trail, not a black box" description="Each recommendation preserves the path from source language to governing requirement."/><div className="mt-12 grid gap-0 md:grid-cols-3">{[
      ["01 / Query", "Read", "Product descriptions, schedules and tender clauses are parsed in their original context."], ["02 / Retrieval", "Compare", "Semantic meaning and exact terminology are checked against the indexed corpus."], ["03 / Evidence", "Cite", "Ranked standards return with the clause, confidence and a plain-language rationale."],
    ].map(([tag,title,text],i)=><div key={title} className="relative border-l border-accent-foreground px-6 py-4 md:px-8"><span className="eyebrow">{tag}</span><h3 className="mt-3 font-serif text-3xl text-primary">{title}</h3><p className="mt-3 leading-7 text-muted-foreground">{text}</p>{i<2&&<ArrowRight className="absolute -right-2 top-1/2 z-10 hidden size-4 bg-background text-accent-foreground md:block"/>}</div>)}</div></div></section>

    <section className="page-wrap py-20"><SectionHeading eyebrow="Inside a live review" title="One excerpt. Three defensible matches."/><div className="mt-10 grid gap-5 lg:grid-cols-[.78fr_1.22fr]"><div className="glass-panel ruled-bg p-6"><FileSearch className="size-6 text-accent-foreground"/><p className="mt-5 text-xs font-bold uppercase tracking-[.14em] text-muted-foreground">Schedule B · Section 6</p><p className="mt-5 font-serif text-2xl leading-9 text-primary">All final circuits shall include copper conductors, appropriate overload protection, and an uninterrupted protective earth.</p><div className="mt-8 border-t border-border pt-4 text-xs text-muted-foreground">Source: Electrical Works Tender · 42 pages</div></div><div className="grid gap-4">{searchResults.slice(0,2).map((result)=><StandardResultCard key={result.standard.id} result={result} compact />)}</div></div></section>

    <section className="border-y border-border bg-primary py-20 text-primary-foreground"><div className="page-wrap"><SectionHeading eyebrow="Multilingual by default" title="Ask in the language your tender was written in."/><div className="mt-10 grid gap-px overflow-hidden rounded-sm bg-primary-foreground/20 md:grid-cols-2"><div className="bg-primary p-6 sm:p-8"><p className="eyebrow text-primary-foreground/70">English</p><p className="mt-4 font-serif text-xl leading-8">“Requirements for safe drinking water in a rural school.”</p><div className="mt-6 border-l-2 border-accent pl-4"><b>IS 10500:2012</b><p className="mt-1 text-sm text-primary-foreground/70">Drinking Water — Specification</p></div></div><div className="bg-primary p-6 sm:p-8" lang="hi"><p className="eyebrow text-primary-foreground/70">हिन्दी</p><p className="mt-4 font-serif text-xl leading-8">“ग्रामीण विद्यालय में सुरक्षित पेयजल की आवश्यकताएँ।”</p><div className="mt-6 border-l-2 border-accent pl-4"><b>IS 10500:2012</b><p className="mt-1 text-sm text-primary-foreground/70">पेयजल — विनिर्देश</p></div></div></div></div></section>
    <section className="page-wrap py-24 text-center"><Quote className="mx-auto size-7 text-accent-foreground"/><h2 className="mx-auto mt-5 max-w-3xl font-serif text-4xl leading-tight text-primary sm:text-5xl">Make every procurement decision traceable.</h2><p className="mx-auto mt-4 max-w-xl text-muted-foreground">Turn a requirement into a standards shortlist your reviewers can verify.</p><Button asChild size="lg" className="mt-8"><Link to="/search">Start a standards search <ArrowRight /></Link></Button></section>
    <footer className="border-t border-border py-8"><div className="page-wrap flex flex-col items-center justify-between gap-4 sm:flex-row"><Wordmark/><p className="text-xs text-muted-foreground">Built for a stronger, standards-led India.</p><div className="flex items-center gap-2 text-xs text-muted-foreground"><Languages className="size-4"/> English · हिन्दी</div></div></footer>
  </>;
}