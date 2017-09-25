import React, {Component} from 'react';
import StyleButton from "./styleButton"
import DraftBlockTypeAnalysis from '../utils/DraftBlockTypeAnalysis'
const BlockStyleControls = (props) => {
  const {editorState,lang} = props;
  const selection = editorState.getSelection();
  //ul和ol的下拉按钮的type都转成ul与ol的type,保持跟ul和ol的操作不变
  const blockType = DraftBlockTypeAnalysis.getDraftBlockTypeAnalysis(editorState.getCurrentContent().getBlockForKey(selection.getStartKey()).getType());
    
  const BLOCK_TYPES = [
    {
      text:lang.H1,
      label: "editor_H1",
      style: 'header-one'
    }, {
      text:lang.H2,
      label: "editor_H2",
      style: 'header-two'
    }, {
      text:lang.H3,
      label: "editor_H3",
      style: 'header-three'
    }, {
      text:lang.H4,
      label: "editor_H4",
      style: 'header-four'
    }, {
      text:lang.refs,
      label: "editor_refs",
      style: 'blockquote'
    }, {
      text:lang.ul,
      label: "editor_ul",
      style: 'unordered-list-item'
    }, {
      text:lang.ol,
      label: "editor_ol",
      style: 'ordered-list-item'
    }, {
      text:lang.pre,
      label: "editor_pre",
      style: 'code-block'
    }
  ];
  return (
    <div className="RichEditor-controls">
      {BLOCK_TYPES.map((type, i) => {
        let button = <StyleButton
          key={type.style}
          text={type.text}
          active={type.style === blockType}
          label={type.label}
          onToggle={props.onToggle}
          style={type.style}/>
        return button;
      })}
    </div>
  );
};
module.exports = BlockStyleControls;
