import Container from "@/components/ui/Container";

export default function PlaceholderPage({ title }: { title: string }) {
  return (
    <Container className="section-space">
      <h1 className="text-page">{title}</h1>
      <p className="mt-6 max-w-prose text-body text-secondary">Placeholder page. Content has not yet been supplied.</p>
    </Container>
  );
}
