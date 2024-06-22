import { Suspense } from "react";
import Spinner from "../../components/loaders/Spinner";

const withSuspense =
  (WrappedComponent: React.FunctionComponent) =>
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  (props: any) =>
    (
      <Suspense fallback={<Spinner color="#fff" />}>
        <WrappedComponent {...props} />
      </Suspense>
    );

export default withSuspense;


