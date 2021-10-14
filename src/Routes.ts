import type { ParamListBase, RouteProp } from '@react-navigation/native';
import type { StackNavigationProp } from '@react-navigation/stack';

export interface StackNavigationProps<ParamList extends ParamListBase, RouteName extends keyof ParamList = string> {
  navigation: StackNavigationProp<ParamList, RouteName>;
  route: RouteProp<ParamList, RouteName>;
}

export type Routes = {
  Overview: undefined;
  OverviewDetails: undefined;
  WorkoutPlanner: undefined;
  Workout: undefined;
  Onboarding: undefined;
};
