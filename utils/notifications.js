import { AsyncStorage } from 'react-native'
import { Notifications } from 'expo'
import * as Permissions from 'expo-permissions'

const NOTIFICATION_KEY = 'MobileFlashcards:notifications'

function createNotification () {
    return {
        title: 'Take a quiz!',
        body: "👋 don't forget to take a quiz for today!",
        ios: {
            sound: true,
        },
        android: {
            sound: true,
            priority: 'high',
            sticky: false,
            vibrate: true,
        }
    }
}

export function setLocalNotification () {
    AsyncStorage.getItem(NOTIFICATION_KEY)
        .then(JSON.parse)
        .then(( data ) => {
            if (data === null ) {
                Permissions.askAsync(Permissions.NOTIFICATIONS)
                  .then(({ status }) => {
                      if (status === 'granted') {
                        Notifications.cancelAllScheduledNotificationsAsync()

                        let tomorrow = new Date()
                        tomorrow.setDate(tomorrow.getDate() + 1)
                        tomorrow.setHours(20)
                        tomorrow.setMinutes(0)

                        Notifications.scheduleLocalNotificationAsync(
                            createNotification(),
                            {
                                time: tomorrow,
                                repeat: 'day',
                            }
                        )
                        AsyncStorage.setItem(NOTIFICATION_KEY, JSON.stringify(true))
                      } 
                  })
            }
        })
}

export function clearLocalNotification () {
    return AsyncStorage.removeItem(NOTIFICATION_KEY)
        .then(Notifications.cancelAllScheduledNotificationsAsync)
}