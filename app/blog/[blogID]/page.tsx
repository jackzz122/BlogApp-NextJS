export default async function Page({
  params,
}: {
  params: Promise<{ blogID: String }>;
}) {
  const ID = (await params).blogID;
  return <div>Blog by {ID}</div>;
}
