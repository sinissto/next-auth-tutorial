import { Header } from "@/components/auth/header";
import { BackButton } from "@/components/auth/back-button";
import { Card, CardFooter, CardHeader } from "@/components/ui/card";
import { CardWrapper } from "@/components/auth/card-wrapper";
import { ExclamationTriangleIcon } from "@radix-ui/react-icons";

export const ErrorCard = () => {
  return (
    <CardWrapper
      headerLabel="Oooops.... Authentication Error! Something went wrong"
      backButtonHref={"/auth/login"}
      backButtonLabel={"Back to Login"}
    >
      <div className={"w-full flex justify-center "}>
        <ExclamationTriangleIcon className="w-5 h-5 text-destructive" />
      </div>
    </CardWrapper>
  );
};
