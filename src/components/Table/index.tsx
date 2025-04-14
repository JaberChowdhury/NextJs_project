"use client";

import useModal from "@/store/useModal";
import useTodo from "@/store/useTodo";
import { Table, Stack, Badge, Button, Text, Divider } from "@mantine/core";
import TodoModal from "../Todomodal";
import { formatDistanceToNow } from "date-fns";

export function TableComponent() {
  const { todos } = useTodo();

  // Map for status colors
  const statusColorMap = {
    FINISHED: { color: "teal", label: "FINISHED" },
    PENDING: { color: "orange", label: "PENDING" },
    WORKING: { color: "blue", label: "WORKING" },
  };

  const { openModal, setComponent } = useModal();

  const handleclick = (id: string) => {
    openModal();
    setComponent(
      <TodoModal todo={todos.filter((item) => item.id === id)[0]} />,
    );
  };
  return (
    <Table.ScrollContainer minWidth="xs">
      <Table verticalSpacing="xs">
        <Table.Thead>
          <Table.Tr>
            <Table.Th>No.</Table.Th>
            <Table.Th>Title & Description</Table.Th>
            <Table.Th>Tags</Table.Th>
            <Table.Th>Author</Table.Th>
            <Table.Th>Created At</Table.Th>
            <Table.Th>Status</Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>
          {todos.map((item, index) => (
            <Table.Tr
              onClick={() => handleclick(item.id)}
              className="hover:bg-amber-50/[0.1] hover:shadow-2xs"
              key={item.id || index}
            >
              <Table.Td>{index + 1}</Table.Td>
              <Table.Td>
                <Stack gap={0}>
                  <Text className="font-bold">
                    {item.title?.slice(0, 50) || "No Title"}...
                  </Text>
                  <Divider my="sm" color="blue" variant="dotted" />
                  <Text className="font-light">
                    {item.description?.slice(0, 120) || "No Description"}...
                  </Text>
                </Stack>
              </Table.Td>
              <Table.Td>
                <Stack>
                  {item.tags.map((tag, tagIndex) => (
                    <Badge
                      key={tagIndex}
                      size="md"
                      variant="gradient"
                      gradient={{ from: "blue", to: "cyan", deg: 90 }}
                    >
                      {tag}
                    </Badge>
                  ))}
                </Stack>
              </Table.Td>
              <Table.Td>{item.assignee?.name || "@me"}</Table.Td>
              <Table.Td>
                {item.createdAt
                  ? `${formatDistanceToNow(new Date(item.createdAt), { addSuffix: true })}`
                  : "N/A"}
              </Table.Td>
              <Table.Td>
                <Badge
                  color={statusColorMap[item.status]?.color || "gray"}
                  variant="light"
                >
                  {item.status}
                </Badge>
              </Table.Td>
            </Table.Tr>
          ))}
        </Table.Tbody>
      </Table>
    </Table.ScrollContainer>
  );
}
