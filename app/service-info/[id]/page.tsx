import ServiceInfoComponent from "@/components/ServiceInfoComponent";

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const slug = (await params).id;
  return <ServiceInfoComponent serviceId={slug} />;
}
