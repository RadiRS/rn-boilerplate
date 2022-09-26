import React, { useEffect, useState } from 'react';
import { ActivityIndicator, ListRenderItem, View } from 'react-native';

import { useTheme } from '@/hooks';
import { FlatList, Input, SafeArea, Text } from '@/components/ui';
import { useGetTodosQuery, Todo, ParamsTodo } from '@/services/todo';
import { debounce } from '@/helpers';

const isValidNotEmptyArray = (array: any[]): boolean => {
  return !!(array && array?.length && array?.length > 0);
};

const FlatListPreviewContainer = () => {
  const { Gutters, Layout } = useTheme();
  const [todos, setTodos] = useState<Todo[]>([]);
  const [params, setParams] = useState<ParamsTodo>({
    _page: 1,
    _limit: 20,
    q: '',
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

  const onChangeText = debounce((value: string) => {
    setParams(prevState => ({ ...prevState, q: value, _page: 1 }));
  }, 500);

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

  const renderHeader = () => {
    return (
      <View style={[Gutters.regularVPadding, Gutters.regularHPadding]}>
        <Input placeholder="Search.." onChangeText={onChangeText} />
      </View>
    );
  };

  const renderFooter = () => {
    if (!isFetching) {
      return null;
    }

    return <ActivityIndicator style={Gutters.regularVMargin} size="small" />;
  };

  return (
    <SafeArea>
      <FlatList
        data={todos}
        refreshing={isLoading}
        onRefresh={onRefresh}
        onEndReached={onEndReached}
        renderItem={renderItem}
        ListHeaderComponent={renderHeader()}
        ListFooterComponent={renderFooter()}
      />
    </SafeArea>
  );
};

export default FlatListPreviewContainer;
