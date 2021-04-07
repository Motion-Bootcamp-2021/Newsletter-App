import { useState } from 'react';
import { Link } from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as VscIcons from 'react-icons/vsc';

function NewslettersLink() {
    const [folderInput, setFolderInput] = useState(false);

    const toggleFolderInput = () => setFolderInput(!folderInput);

    return (
        <div className="item newsletters">
            <input type="checkbox" id="B"/>
            <label htmlFor="B">
                <IoIcons.IoIosMail />
                Newsletters
                <FaIcons.FaChevronDown />
            </label>
            
            <ul>
                <li>
                    <div className="sub-item">
                        <input type="checkbox" id="B-A"/>
                            <label to="/newsletters/morning-brew" htmlFor="B-A">
                                <VscIcons.VscCircleFilled />
                                Morning Brew
                                <FaIcons.FaChevronDown/>
                            </label>
                      
                        
                        <ul>
                            <li>
                                <Link to="/newsletters/morning-brew" >
                                    <VscIcons.VscCircleFilled />
                                    1 Unread
                                </Link>
                            </li>
                        </ul>
                    </div>
                </li>
                <li>
                    <div className="sub-item">
                        <input type="checkbox" id="B-B"/>
                        <label htmlFor="B-B">
                            <VscIcons.VscCircleFilled />
                            Business
                            <FaIcons.FaChevronDown/>
                        </label>
                        
                        <ul>
                            <li>
                                <Link to="/newsletters/business">
                                    <VscIcons.VscCircleFilled />
                                    Morning Brew
                                </Link>
                            </li>
                            <li>
                                <Link to="/newsletters/business">
                                    <VscIcons.VscCircleFilled />
                                    Morning Brew
                                </Link>
                            </li>
                            <li>
                                <Link to="/newsletters/business">
                                    <VscIcons.VscCircleFilled />
                                    Morning Brew
                                </Link>
                            </li>
                        </ul>
                    
                    </div>
                </li>
                <li>
                    <div className="sub-item">
                        <input type="checkbox" id="B-C"/>
                        <label htmlFor="B-C">
                            <VscIcons.VscCircleFilled />
                            Morning Brew
                            <FaIcons.FaChevronDown/>
                        </label>
                        
                        <ul>
                            <li>
                                <Link to="/newsletters/morning-brew">
                                    <VscIcons.VscCircleFilled />
                                    1 Unread
                                </Link>
                            </li>
                        </ul>
                    
                    </div>
                </li>
            </ul>
            <form action="" className={folderInput ? 'folder-input active' : 'folder-input'}>
                <input type="text" />

            </form>
            <Link to="#" className="create-folder" onClick={toggleFolderInput}>
                <AiIcons.AiFillFolderAdd />
                Create folder
            </Link>
        </div>
    );
}

export default NewslettersLink;
