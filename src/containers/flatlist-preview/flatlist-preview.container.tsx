import React, { useEffect, useState } from 'react';
import { ActivityIndicator, ListRenderItem, View } from 'react-native';

import { useTheme } from '@/hooks';
import { FlatList, Text } from '@/components/ui';
import { useGetTodosQuery, Todo, ParamsTodo } from '@/services/todo';

const isValidNotEmptyArray = (array: any[]): boolean => {
  return !!(array && array?.length && array?.length > 0);
};

const FlatListPreviewContainer = () => {
  const { Gutters, Layout } = useTheme();
  const [todos, setTodos] = useState<Todo[]>([]);
  const [params, setParams] = useState<ParamsTodo>({
    _page: 1,
    _limit: 20,
  });
  const { data, isLoading, isFetching } = useGetTodosQuery(params);

  useEffect(() => {
    if (!data || !isValidNotEmptyArray(data)) {
      return;
    }

    if (params._page === 1) {
      setTodos(data);
    } else {
      setTodos(prevState => [...prevState, ...data]);
    }
  }, [data, params._page]);

  const onRefresh = () => {
    setParams({
      ...params,
      _page: 1,
      q: '',
    });
  };

  const onEndReached = () => {
    if (!data || !isValidNotEmptyArray(data)) {
      return;
    }

    setParams(prevState => ({
      ...prevState,
      _page: prevState._page && prevState._page + 1,
    }));
  };

  const renderItem: ListRenderItem<Todo> = ({ item }) => (
    <View
      style={[
        Gutters.regularHPadding,
        Gutters.smallVPadding,
        // eslint-disable-next-line react-native/no-inline-styles
        { borderBottomColor: 'grey', borderBottomWidth: 1 },
      ]}>
      <Text>Title: {item.title}</Text>
      <View style={Layout.row}>
        <Text>Completed: {item.completed ? 'Yes' : 'No'} </Text>
      </View>
    </View>
  );

  const renderFooter = () => {
    if (!isFetching) {
      return null;
    }

    return <ActivityIndicator style={Gutters.regularVMargin} size="small" />;
  };

  return (
    <FlatList
      data={todos}
      refreshing={isLoading}
      onRefresh={onRefresh}
      onEndReached={onEndReached}
      renderItem={renderItem}
      ListFooterComponent={renderFooter}
    />
  );
};

export default FlatListPreviewContainer;
