import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";

export default function Home() {
  const t = useTranslations("Index");
  return (
    <div>
      <Button>{t("title")}</Button>
    </div>
  );
}
