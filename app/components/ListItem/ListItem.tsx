import React from 'react'
import { Image, View } from 'react-native'
import AppText from '../AppText'
import { styles } from './styles'

interface ListItemProps {
    title: string
    subtitle: string
    image: any
}

const ListItem = (props: ListItemProps) => {
    const {image, subtitle, title} = props;
  return (
    <View style={styles.container}>
      {/* <Image style={styles.image} source={image}/> */}
      <View>
        <AppText style={styles.title}>{title}</AppText>
        <AppText style={styles.subtitle}>{subtitle}</AppText>
      </View>
    </View>
  )
}

export default ListItem
