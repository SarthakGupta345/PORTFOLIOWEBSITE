import {
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from "@/components/page-header";
import { Loader2 } from "lucide-react";
const Loading = () => {
  return (
    <div className="px-6 py-8 md:px-12 md:py-12 lg:px-16 lg:py-14">
      <PageHeader>
        <PageHeaderHeading>Loading...</PageHeaderHeading>
        <PageHeaderDescription>
          Getting data from various sources...
        </PageHeaderDescription>
      </PageHeader>
      <div className="flex flex-col items-center justify-center mt-12 gap-6">
        <Loader2 className="w-10 h-10 animate-spin" />
        <p className="text-sm text-muted-foreground">
          This may take a few seconds...
        </p>
      </div>
    </div>
  );
};
export default Loading;
