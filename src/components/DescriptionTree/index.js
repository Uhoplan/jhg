import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import TreeView from "@material-ui/lab/TreeView"
import ExpandMoreIcon from "@material-ui/icons/ExpandMore"
import ChevronRightIcon from "@material-ui/icons/ChevronRight"
import TreeItem from "@material-ui/lab/TreeItem"

import './style.css'

export const DescriptionTree = props => {

  const { 
    content, 
    setContent,
    setMapCenter
  } = props

  const onLabelClick = item_id => {
    setMapCenter(item_id)
  } 

  return (
    <TreeView
      className='tree-container'
      defaultCollapseIcon={<ExpandMoreIcon />}
      defaultExpanded={content.root}
      defaultExpandIcon={<ChevronRightIcon />}
    >
      <TreeItem label="Points" nodeId='0'>
        {content.children.map((item, index) => {
          return (
            <TreeItem
              key={index}
              nodeId={item.id}
              label={item.name}
              onLabelClick={() => onLabelClick(item.id)}
            />
          )
        })}
      </TreeItem>
    </TreeView>
  )
}
