import React from "react";
import { useCMEditViewDataManager } from "@strapi/helper-plugin";
import Eye from "@strapi/icons/Eye";
import { LinkButton } from "@strapi/design-system/LinkButton";

const PreviewLink = () => {
  const { initialData } = useCMEditViewDataManager();
  const slug = initialData.slug || "";

  return (
    <LinkButton
      size="S"
      startIcon={<Eye />}
      style={{ width: "100%" }}
      href={`https://.com/api/preview?secret=WKPQq6m2MWJdQuciK7wyH93JXYai5v8vBbeKqDaNVuoajU98bqp2GnSd9TF9LsPg&slug=${slug}&locale=${initialData.locale}`} //TODO: do not use hardcoded secret
      variant="secondary"
      target="_blank"
      rel="noopener noreferrer"
      title="page preview"
    >
      Preview
    </LinkButton>
  );
};

export default PreviewLink;
