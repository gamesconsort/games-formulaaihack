import React, { useState } from "react";

export default function Output({ data }) {

  return (
    <>
    {data && (
      <div>
        <p>5 mins : {data['5']} </p>
        <p>10 mins : {data['10']} </p>
        <p>15 mins : {data['15']} </p>
        <p>30 mins : {data['30']} </p>
        <p>60 mins : {data['60']} </p>
      </div>
    )}
    </>
  )
}