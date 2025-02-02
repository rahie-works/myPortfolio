// constants
import { LINKS } from "../constants/enums";
import {
  GITHUB_URL,
  INSTAGRAM_URL,
  LINKEDIN_URL,
  STACKOVERFLOW_URL,
} from "../constants/router";

export const handleSocialClick = (link: string) => {
  switch (link) {
    case LINKS.LINKEDIN:
      window.open(LINKEDIN_URL, "_blank");
      break;
    case LINKS.GITHUB:
      window.open(GITHUB_URL, "_blank");
      break;
    case LINKS.INSTAGRAM:
      window.open(INSTAGRAM_URL, "_blank");
      break;
    case LINKS.STACKOVERFLOW:
      window.open(STACKOVERFLOW_URL, "_blank");
      break;
  }
};
