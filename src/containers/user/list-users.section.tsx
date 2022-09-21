import { View } from 'react-native';
import React from 'react';

import { useGetUsersQuery } from '@/services/users';

import { useTheme } from '@/hooks';
import { Button, Text } from '@/components/ui';

const ListUserSection = () => {
  const { Gutters } = useTheme();
  const {
    data: users,
    isLoading,
    isSuccess,
    isError,
    error,
    refetch,
  } = useGetUsersQuery();

  return (
    <View>
      <Text>List User: </Text>
      {isError && <Text status="error">{JSON.stringify(error)}</Text>}
      {isSuccess &&
        users?.map(user => (
          <View key={user._id}>
            <Text>Username: {user.username}</Text>
            <Text>ID: {user._id}</Text>
          </View>
        ))}
      <Button
        appearance="outlined"
        loading={isLoading}
        style={Gutters.regularTMargin}
        onPress={refetch}>
        Refresh Data
      </Button>
    </View>
  );
};

export default ListUserSection;
