"use client";
import useTextanalyzer from "@/store/useTextanalyzer";
import { Button, Card, Grid, Group, Stack, Textarea } from "@mantine/core";
import React, { useEffect } from "react";

const page = () => {
  const { text, setText, analyzedData, setAnalyzeData } = useTextanalyzer();

  useEffect(() => {
    setAnalyzeData();
  }, []);
  return (
    <Stack>
      <Textarea
        size="xl"
        onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
          setText(e.target.value)
        }
        value={text}
      />
      <Button onClick={setAnalyzeData}>Analyze</Button>

      <Grid className="gap-3">
        {analyzedData.map((item, id) => (
          <Card
            key={id}
            shadow="sm"
            // padding="lg"
            radius="md"
            withBorder
            // component={Grid.Col}
            // span={1}
            className="grid grid-cols-3 justify-center items-cente m-1"
          >
            <div>{item.key}</div>
            <div className="mr-2">:</div>
            <div>{item.count}</div>
          </Card>
        ))}
      </Grid>
    </Stack>
  );
};

export default page;
