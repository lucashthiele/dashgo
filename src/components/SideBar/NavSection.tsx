import { Text, Box, Stack } from "@chakra-ui/react";
import { ReactNode } from "react";

interface NavSectioProps {
  title: string;
  children: ReactNode;
}

export function NavSection({ title, children }: NavSectioProps) {
  return (
    <Box>
      <Text fontWeight="bold" color="gray.400" fontSize="small">
        {title}
      </Text>
      <Stack spacing="4" mt="8" align="stretch">
        {children}
      </Stack>
    </Box>
  );
}
