import React from "react";
import {Editor, EditorState, RichUtils,convertToRaw,convertFromRaw } from 'draft-js';
import draftToHtml from 'draftjs-to-html';
import Parser from 'html-react-parser';
import 'draft-js/dist/Draft.css';
import editorstyles from './Slidebar.modle.css';
import { AiOutlineSend} from "react-icons/ai";
import { BsEmojiSmile } from "react-icons/bs";
import { FaFileUpload} from "react-icons/fa";
import { BiItalic,BiBold,BiCodeAlt,BiLink,BiCodeBlock} from "react-icons/bi";
import { AiOutlineStrikethrough} from "react-icons/ai";
import { BsPlusCircleFill} from "react-icons/bs";
import { AiOutlineLink} from "react-icons/ai";
import { MdFormatListBulleted,MdFormatListNumbered} from "react-icons/md";
import { HiAtSymbol} from "react-icons/hi";
import { CompositeDecorator } from 'draft-js';




class Sidebar extends React.Component {

    _onBoldClick() {
        this.onChange(RichUtils.toggleInlineStyle(this.state.editorState, 'BOLD'));
      }
      _onItalic() {
        this.onChange(RichUtils.toggleInlineStyle   (this.state.editorState, 'ITALIC'));
      }
    
      _onStrikeline() {
        this.onChange(RichUtils.toggleInlineStyle(this.state.editorState, 'STRIKETHROUGH'));
      }
      _Unorderer(){
        this.setState({editorState: RichUtils.toggleBlockType(this.state.editorState,'unordered-list-item' )})
        }
     _Orderdlist(){
        this.setState({editorState: RichUtils.toggleBlockType(this.state.editorState,'ordered-list-item' )}) }
            toggleBlockType = (blockType) => {this.onChange(RichUtils.toggleBlockType(this.state.editorState, blockType));};
    

            constructor(props) {
        

                super(props);
                this.state = {editorState: EditorState.createEmpty()};
                const content = window.localStorage.getItem('content');
                if (content) {
                  this.state.editorState = EditorState.createWithContent(convertFromRaw(JSON.parse(content)));
                } else {
                  this.state.editorState = EditorState.createEmpty();
                }
        
        
               
        
                // this.onChange = editorState => this.setState({editorState});
              }
           
         Dot = ()=> {
           
        }
        
              onChange = (editorState) => {
                const contentState = editorState.getCurrentContent();
                this.saveContent(contentState);
                this.setState({
                  editorState,
                });
              }
        
              saveContent = (content) => {
                window.localStorage.setItem('content', JSON.stringify(convertToRaw(content)));
              }
        
               Send =() =>
              {
                  const rawContentState = convertToRaw(EditorState.getCurrentContent());
                  const markup = draftToHtml(rawContentState);
                  <div>
                      {markup}
                  </div>
              }
                    
        
        
        
        
                render() {
                    return (<div >
                       <div className=" bottom-0 left-0 h-fill   bg-zinc-900 p-2">
            <div className="    rounded-xl bg-zinc-800  w-auto p-1 border-zinc-500 border-2" >
            <div className="  flex flex-row p-1 text-zinc-400 ">
                       
                        <button className=' hover:bg-gray-600 p-1 rounded-md'onClick={this._onBoldClick.bind(this)}><SideBarIcon icon={<BiBold size="18"/>}/></button>   
                         <button className=' hover:bg-gray-600 p-1 rounded-md' onClick={this._onItalic.bind(this)}><SideBarIcon icon={<BiItalic size="20"/>}/></button>
                         <button className='hover:bg-gray-600 p-1 rounded-md' onClick={this._onStrikeline.bind(this)}> <SideBarIcon icon={<AiOutlineStrikethrough size="20"/>}/></button>  
                         <div className='hover:bg-gray-600 p-1  border-zinc-400'><SideBarIcon icon={<BiLink size="20"/>}/></div>
                         <button className='hover:bg-gray-600 p-1 rounded-md' onClick={this._Unorderer.bind(this)}> <SideBarIcon icon={<MdFormatListBulleted size="20"/>}/></button>    
                         <button className='hover:bg-gray-600 p-1 rounded-md' onClick={this._Orderdlist.bind(this)}><SideBarIcon icon={<MdFormatListNumbered size="20"/>}/></button>
                        <div className='hover:bg-gray-600 p-1 rounded-md'><SideBarIcon icon={<BiCodeAlt size="20"/>}/></div>
                        <div className='hover:bg-gray-600 p-1 rounded-md'><SideBarIcon icon={<BiCodeBlock size="20"/>}/></div>
                        </div>
                        <div className=" w-1/2 "> </div>
                        
                        <div className=" mx-3 flex p-1 flex-col  text-slate-500 w-full " data-placeholder=" Text here...">
                        <div className={editorstyles.editor}>
                        <Editor  editorState={this.state.editorState} onChange={this.onChange} />
                        </div>
                        </div>
                                           

                
                        <div className="flex flex-row p-1 text-zinc-400 ">
                        <div className="  hover:bg-gray-600 p-1 rounded-md"><SideBarIcon icon={<BsPlusCircleFill size="20"/>}/></div>
                        <div className=" hover:bg-gray-600 p-1 rounded-md"><SideBarIcon icon={<BsEmojiSmile size="20"/>}/></div>
                        <div className=" hover:bg-gray-600 p-1 rounded-md"><SideBarIcon icon={<HiAtSymbol size="20"/>}/></div>
                        <div className=" flex flex-auto w-4/5"></div> 
                        <div className=" bg-green-900 w-20 p-1 rounded-md"><a href="#"></a><SideBarIcon  icon={<AiOutlineSend size="20"/>}/></div>
                        </div >

                        </div>
                   
                       
                      
                    </div>
                    </div>
                        );
                    }
                }
                const SideBarIcon = ({icon})=>
                (
                    <div className="sidebar-icon">
                        {icon}
                    </div>
                );





export default Sidebar;