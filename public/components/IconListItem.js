import { HStack, ListItem } from '@chakra-ui/react'
import React from 'react'
import { FaPlus } from 'react-icons/fa'

function IconListItem({ children }) {
	return (
		<HStack>
			<FaPlus size={14} />
			<ListItem>{children}</ListItem>
		</HStack>
	)
}

export default IconListItem
