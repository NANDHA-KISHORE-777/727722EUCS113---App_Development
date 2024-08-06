import React, { useState } from 'react';
import { IconButton, TextField } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import SaveIcon from '@mui/icons-material/Save';
import './ItemGroupsManager.css';
import { useAuth } from './AuthContext';

const ItemGroupsManager = ({ items }) => {
  const [expandedGroups, setExpandedGroups] = useState({});
  const [groups, setGroups] = useState(items?.groups || {});
  const [editItemIndex, setEditItemIndex] = useState(null);
  const [editValues, setEditValues] = useState({});
  const { user } = useAuth();

  const toggleGroup = (groupName) => {
    setExpandedGroups((prev) => ({
      ...prev,
      [groupName]: !prev[groupName],
    }));
  };

  const deleteGroup = (groupName) => {
    const updatedGroups = { ...groups };
    delete updatedGroups[groupName];
    setGroups(updatedGroups);
  };

  const handleEditClick = (groupName, itemIndex) => {
    setEditItemIndex({ groupName, itemIndex });
    setEditValues(groups[groupName][itemIndex]);
  };

  const handleInputChange = (field, value) => {
    setEditValues((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSaveClick = (groupName, itemIndex) => {
    const updatedGroups = { ...groups };
    updatedGroups[groupName][itemIndex] = editValues;
    setGroups(updatedGroups);
    setEditItemIndex(null);
  };

  return (
    <div className="item-groups-manager">
      <h1>Item Groups</h1>
      <ul>
        {Object.keys(groups).map((groupName, index) => (
          <li key={index} className="group-container">
            <div className="group-header">
              <div className="group-name" onClick={() => toggleGroup(groupName)}>
                {groupName}
              </div>
              {user === 'admin' && (
                <IconButton
                  edge="end"
                  aria-label="delete"
                  onClick={() => deleteGroup(groupName)}
                  className="delete-button"
                >
                  <DeleteIcon />
                </IconButton>
              )}
            </div>
            {expandedGroups[groupName] && (
              <ul className="group-items">
                {groups[groupName].length > 0 ? (
                  groups[groupName].map((item, itemIndex) => (
                    <li key={itemIndex} className="group-item">
                      {editItemIndex && editItemIndex.groupName === groupName && editItemIndex.itemIndex === itemIndex ? (
                        <div className="item-details">
                          <TextField
                            label="Product Name"
                            value={editValues.productName}
                            onChange={(e) => handleInputChange('productName', e.target.value)}
                          />
                          <TextField
                            label="Product SKU"
                            value={editValues.productSKU}
                            onChange={(e) => handleInputChange('productSKU', e.target.value)}
                          />
                          <TextField
                            label="Product Price"
                            value={editValues.productPrice}
                            onChange={(e) => handleInputChange('productPrice', e.target.value)}
                          />
                          <TextField
                            label="Description"
                            value={editValues.description}
                            onChange={(e) => handleInputChange('description', e.target.value)}
                          />
                          <IconButton onClick={() => handleSaveClick(groupName, itemIndex)}>
                            <SaveIcon />
                          </IconButton>
                        </div>
                      ) : (
                        <div className="item-details">
                          {item.productName} - {item.productSKU} - {item.productPrice} - {item.description}
                          {user === 'admin' && (
                            <div className="icon-container">
                              <IconButton
                                onClick={() => handleEditClick(groupName, itemIndex)}
                                className="edit-button"
                              >
                                <EditIcon />
                              </IconButton>
                            </div>
                          )}
                        </div>
                      )}
                    </li>
                  ))
                ) : (
                  <li>No items available</li>
                )}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ItemGroupsManager;
