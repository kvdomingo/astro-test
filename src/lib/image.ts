import { Cloudinary } from "@cloudinary/url-gen";
import { Resize } from "@cloudinary/url-gen/actions";

export const cld = new Cloudinary({
  cloud: {
    cloudName: "kdphotography-assets",
  },
  url: {
    secure: true,
  },
  tag: {
    clientHints: true,
    responsive: {
      isResponsive: true,
    },
    contentDelimiter: "/",
  },
});

export const buildUrl = (path: string = "") => {
  const _path = `lsfm/assets/${path}`;
  if (path.includes("Moving")) {
    return cld
      .video(_path)
      .resize(Resize.scale("auto"))
      .quality("auto")
      .format("auto")
      .toURL();
  } else {
    return cld
      .image(_path)
      .resize(Resize.scale("auto"))
      .quality("auto")
      .format("auto")
      .toURL();
  }
};
