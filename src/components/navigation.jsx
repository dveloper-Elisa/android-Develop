import { View, Text } from 'react-native';
import React, { useEffect, useState } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import tw from 'twrnc';

export default function BottomNavigation() {
    const Bottom = createBottomTabNavigator();

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function fetchData() {
            try {
                const url = 'http://localhost:3000/api/v2/getData';
                const token = 'BW@WW@@AEFCEENPPWFSV';
                const result = await fetch(url, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${token}`,
                    },
                });

                if (result.ok) {
                    const response = await result.json();
                    setData(response);
                    setLoading(false);
                } else {
                    setError('Failed to fetch data');
                    setLoading(false);
                }
            } catch (error) {
                setError('Internal server error');
                setLoading(false);
            }
        }
        fetchData();
    }, []);

    const MyName = () => {
        return (
            <View style={tw`text-center items-center`}>
                <Text>Welcome to my Name</Text>
                {loading ? (
                    <Text>Loading users ........</Text>
                ) : error ? (
                    <Text>{error}</Text>
                ) : (
                    <Text>Data fetched</Text>
                )}
            </View>
        );
    };

    const Age = () => {
        return (
            <View style={tw`text-center items-center`}>
                <Text>Welcome to my Age Page</Text>
            </View>
        );
    };

    return (
        <Bottom.Navigator>
            <Bottom.Screen name="Name" component={MyName} />
            <Bottom.Screen name="Age" component={Age} />
        </Bottom.Navigator>
    );
}
