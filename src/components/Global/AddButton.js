import React, { useContext, useState, useEffect } from 'react';
import AppContext from '../../AppContext';

function AddButton({ otherUserId, callback, ...rest }) {
  const { appState, appDispatch } = useContext(AppContext);
  const [processing, setProcessing] = useState(false);
  const [isReqSent, setIsReqSent] = useState(
    appState.user.fR.sent.includes(otherUserId)
  );

  const [sendReqCount, setSendReqCount] = useState(0);
  const [cancelReqCount, setCancelSendReqCount] = useState(0);

  const handleSendReq = (e) => {
    e.stopPropagation();
    e.preventDefault();
    setSendReqCount(sendReqCount + 1);
  };

  const handleCancelReq = (e) => {
    e.stopPropagation();
    e.preventDefault();
    setCancelSendReqCount(cancelReqCount + 1);
  };

  useEffect(() => {
    // Faking send "add friend" request to the server
    if (sendReqCount) {
      setProcessing(true);

      const timer = setTimeout(() => {
        setIsReqSent(true);
        setProcessing(false);
        if (callback) callback(true);
        appDispatch({ type: 'sendFriendReq', payload: otherUserId });
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, [sendReqCount]);

  useEffect(() => {
    // Faking send "add friend" request to the server
    if (cancelReqCount) {
      setProcessing(true);

      const timer = setTimeout(() => {
        setIsReqSent(false);
        setProcessing(false);
        if (callback) callback(false);
        appDispatch({ type: 'cancelFriendReq', payload: otherUserId });
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, [cancelReqCount]);

  return (
    <>
      {isReqSent ? (
        <button {...rest} onClick={handleCancelReq}>
          {processing ? 'Wait' : 'Cancel'}
        </button>
      ) : (
        <button {...rest} onClick={handleSendReq}>
          {processing ? 'Wait' : 'Add'}
        </button>
      )}
    </>
  );
}

const areEqual = (prevProps, nextProps) => {
  return prevProps.otherUserId === nextProps.otherUserId;
};

export default React.memo(AddButton, areEqual);
