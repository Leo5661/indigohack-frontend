import Link from "next/link";
import { Card, CardContent, CardFooter, CardHeader } from "../ui/card";
import { Header } from "./header";
import { Separator } from "../ui/separator";
import { Footer } from "./footer";

type CardWrapperProps = {
  children: React.ReactNode;
  headerLabel: string;
  subHeaderString: string;
  backQuestionString: string;
  backButtonLabel: string;
  backButtonHref: string;
};

export function CardWrapper({
  children,
  headerLabel,
  subHeaderString,
  backQuestionString,
  backButtonLabel,
  backButtonHref,
}: CardWrapperProps) {
  return (
    <Card className="w-[400px] shadow-md">
      <CardHeader>
        <Header label={headerLabel} subLabel={subHeaderString} />
      </CardHeader>
      <CardContent>{children}</CardContent>
      <CardFooter>
        <Footer
          backButtonHref={backButtonHref}
          backButtonLabel={backButtonLabel}
          backQuestionString={backQuestionString}
        />
      </CardFooter>
    </Card>
  );
}
