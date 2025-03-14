import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";

export default function Home() {
  const t = useTranslations("Index");
  return (
    <div>
      <Button>{t("title")}</Button>
      <h1 className="title">hello ring side compressed</h1>
      <h2 className="sub-title">ringside narrow</h2>
    </div>
  );
}
