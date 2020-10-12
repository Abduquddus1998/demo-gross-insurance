// @flow
import React, { useCallback } from "react";
import { useDispatch } from "react-redux";

import { onShowModal } from "store/actions/shares";
import { getShareDetailsInfo } from "store/actions/shares";

import { ShareCertificate } from "assets/icons/svg-icons";
import back from "assets/images/shareback.png";

import "./Share.scss";

type Bond = {
  bond_absolute_value: string,
  bond_series: string,
  bond_number: string,
  bond_percent: number,
};

type ShareProps = {
  bond: Array<Bond>,
  accNumber: string,
};

const Share = ({ bond, accNumber }: ShareProps) => {
  const dispatch = useDispatch();
  const series = bond.bond_series;
  const number = bond.bond_number;

  const onTriggerModal = useCallback(async () => {
    await dispatch(getShareDetailsInfo(accNumber, series, number)).then(
      ({ payload }) => {
        payload.data && dispatch(onShowModal());
      }
    );
  }, [accNumber, series, number, dispatch]);

  return (
    <div className="share" style={{ backgroundImage: `url(${back})` }}>
      <div className="share-price">
        <h3>{bond.bond_absolute_value}</h3>
      </div>
      <div className="short-details">
        <div className="info">
          <div>Series Number: {bond.bond_series + " " + bond.bond_number}</div>
          <div>Share profit percent: {bond.bond_percent}%</div>
        </div>
        <div className="share-icon">
          <ShareCertificate width="50px" height="50px" />
        </div>
      </div>
      <div className="shares-button">
        <button type="button" onClick={onTriggerModal}>
          Click
        </button>
      </div>
    </div>
  );
};

export default Share;
