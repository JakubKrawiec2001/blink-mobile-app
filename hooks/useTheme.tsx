import { colors } from "@/constants/colors";
import { useColorScheme } from "react-native";

export const useTheme = () => {
  const colorScheme = useColorScheme();
  const theme = colors[colorScheme || "light"];
  return theme;
};
