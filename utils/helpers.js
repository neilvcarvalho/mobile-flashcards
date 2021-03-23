import AsyncStorage from '@react-native-async-storage/async-storage'
import * as Permissions from 'expo-permissions'
import * as Notifications from 'expo-notifications'

const NOTIFICATION_KEY = 'mobile-flashcards:notification'

export async function clearLocalNotification () {
  await AsyncStorage.removeItem(NOTIFICATION_KEY)
  Notifications.cancelAllScheduledNotificationsAsync()
}

export async function setLocalNotification () {
  setNotificationHandler()

  const notification_data = JSON.parse(await AsyncStorage.getItem(NOTIFICATION_KEY))

  if (notification_data === null || notification_data === undefined) {
    const { status } = await Permissions.askAsync(Permissions.NOTIFICATIONS)

    if (status === 'granted') {
      console.log('Clearing all scheduled notifications')
      Notifications.cancelAllScheduledNotificationsAsync()
      console.log('Setting a new notification for tomorrow')
      Notifications.scheduleNotificationAsync(createNotification())

      AsyncStorage.setItem(NOTIFICATION_KEY, JSON.stringify(true))
    }
  }
}

function createNotification () {
  let tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1)
  tomorrow.setHours(10)
  tomorrow.setMinutes(0)

  return {
    content: {
      title: '💪🧠 Strenghten your learning!',
      body: "Don't forget to do at least one quiz today"
    },
    trigger: tomorrow
  }
}

function setNotificationHandler() {
  Notifications.setNotificationHandler({
    handleNotification: async () => ({
      shouldShowAlert: true,
      shouldPlaySound: false,
      shouldSetBadge: false,
    }),
  })
}