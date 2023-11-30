import { Spinner } from "@nextui-org/spinner";
export default function Loading() {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <Spinner color="secondary" size="lg" />
    </div>
  );
}
