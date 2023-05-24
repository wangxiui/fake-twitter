import React, { useState } from 'react';
// import './PasswordChangeForm.scss'

const PasswordChangeForm = () => {
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmNewPassword, setConfirmNewPassword] = useState('');
  const [currentPasswordError, setCurrentPasswordError] = useState('');
  const [newPasswordError, setNewPasswordError] = useState('');
  const [confirmNewPasswordError, setConfirmNewPasswordError] = useState('');
  const [formError, setFormError] = useState('');

  const validatePassword = (password) => {
    // 长度校验
    if (password.length < 8 || password.length > 20) {
      return false;
    }

    // 包含字符类型校验
    const hasUppercase = /[A-Z]/.test(password);
    const hasLowercase = /[a-z]/.test(password);
    const hasNumber = /[0-9]/.test(password);
    const hasSpecial = /[-+_!@#$%^&*.,?]/.test(password);
    const hasTwoTypes = [hasUppercase, hasLowercase, hasNumber, hasSpecial].filter(Boolean).length >= 2;
    return hasTwoTypes;
  };

  const handleCurrentPasswordChange = (event) => {
    setCurrentPassword(event.target.value);
    setCurrentPasswordError('');
    setFormError('');
  };

  const handleNewPasswordChange = (event) => {
    setNewPassword(event.target.value);
    setNewPasswordError('');
    setFormError('');
  };

  const handleConfirmNewPasswordChange = (event) => {
    setConfirmNewPassword(event.target.value);
    setConfirmNewPasswordError('');
    setFormError('');
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();

    // 校验当前密码
    if (!currentPassword) {
      setCurrentPasswordError('请输入当前密码');
    }

    // 校验新密码
    if (!newPassword) {
      setNewPasswordError('请输入新密码');
    } else if (!validatePassword(newPassword)) {
      setNewPasswordError('密码必须包括英文大小写、数字、特殊字符中的至少2种字符类型，长度在8-20位');
    }

    // 校验确认新密码
    if (!confirmNewPassword) {
      setConfirmNewPasswordError('请确认新密码');
    } else if (newPassword !== confirmNewPassword) {
      setConfirmNewPasswordError('两次输入的密码不一致');
    }

    // 提交表单
    if (currentPassword && newPassword && confirmNewPassword) {
      // 处理表单提交逻辑
      console.log('密码修改成功');
    } else {
      setFormError('请检查表单是否填写完整并符合要求');
    }
  };

  return (
    <div className="password-form-container">
      <form onSubmit={handleFormSubmit} className="password-form">
        <h2 className="password-title">修改密码</h2>
        <div className="password-input-group">
          <label htmlFor="currentPassword">当前密码</label>
          <input
            type="password"
            id="currentPassword"
            value={currentPassword}
            onChange={handleCurrentPasswordChange}
            onBlur={() => setCurrentPasswordError(currentPassword ? '' : '请输入当前密码')}
            className={currentPasswordError ? 'password-input error' : 'password-input'}
          />
          {currentPasswordError && <span className="error-tip">{currentPasswordError}</span>}
        </div>
        <div className="password-input-group">
          <label htmlFor="newPassword">新密码</label>
          <input
            type="password"
            id="newPassword"
            value={newPassword}
            onChange={handleNewPasswordChange}
            onBlur={() => setNewPasswordError(newPassword ? '' : '请输入新密码')}
            className={newPasswordError ? 'password-input error' : 'password-input'}
          />
          {newPasswordError && <span className="error-tip">{newPasswordError}</span>}
        </div>
        <div className="password-input-group">
          <label htmlFor="confirmNewPassword">确认新密码</label>
          <input
            type="password"
            id="confirmNewPassword"
            value={confirmNewPassword}
            onChange={handleConfirmNewPasswordChange}
            onBlur={() => setConfirmNewPasswordError(confirmNewPassword ? '' : '请确认新密码')}
            className={confirmNewPasswordError ? 'password-input error' : 'password-input'}
          />
          {confirmNewPasswordError && <span className="error-tip">{confirmNewPasswordError}</span>}
        </div>
        <div className="password-button-container">
          {formError && <span className="error-tip">{formError}</span>}
          <button type="submit" className="password-button">
            确认变更
          </button>
        </div>
      </form>
    </div>
  );
};

const PasswordChangePage = () => {
  return (
    <div className="password-page">
      <div className="password-page-bg"></div>
      <div className="password-page-content">
        <PasswordChangeForm />
      </div>
    </div>
  );
};


export default PasswordChangePage;
