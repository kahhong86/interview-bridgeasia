import React from "react";
import ScoreList from "../../src/components/scorelist";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Math Test App",
  description: "Show all scores",
};

const ScoreListPage: React.FC = () => {
  return (
    <ScoreList />
  );
};

export default ScoreListPage;