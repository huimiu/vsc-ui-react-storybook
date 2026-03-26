import React from "react";
import { Title, Stories } from "@storybook/blocks";

/**
 * Custom Docs page — shows only title + all stories as an overview.
 * Removes the duplicate "Primary" hero block and the Controls table.
 */
export const DocsPage = () => (
  <>
    <Title />
    <Stories includePrimary />
  </>
);
