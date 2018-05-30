import { createApp, query, withPhenomicApi } from "@phenomic/preset-react-app/lib/client";

const component = () => (
  <div>
    <p>This is a homepage</p>
  </div>
);

export default withPhenomicApi(component, () => ({
  posts: query({ path: "content/posts" }),
}));
