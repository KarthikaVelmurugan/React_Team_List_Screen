import React, { useState } from "react";
import ListCaption from "../Layouts/ListCaption";
import data from "../mockData/membersData.json";
import DeleteIcon from "../components/icons/DeleteIcon";
import EditIcon from "../components/icons/EditIcon";
import CheckBox from "../components/CheckBox";
import QueriesIcon from "../components/icons/QueriesIcon";
import DownArrow from "../components/icons/DownArrow";
import TextData from "../components/TextData";
import Teams from "../components/Teams";
import { Component } from "react/cjs/react.production.min";
import UpArrow from "../components/icons/UpArrow";
import Popup from "reactjs-popup";

export default function MainList() {
  const [arrowState, setArrowState] = useState(true);
  const [selectState, setSelectState] = useState(0);
  const [queriesControl, setQueriesVisible] = useState(0);
  const [resultSet, setResultSet] = useState(
    data &&
      data.data &&
      data.data.sort((item1, item2) => item2.status - item1.status)
  );

  // const [res,setRes]=useState(sortingRes);

  const teams = [
    {
      className: "design",
      value: "Design",
    },
    {
      className: "product",
      value: "Product",
    },
    {
      className: "marketting",
      value: "Marketing",
    },
    {
      className: "rating",
      value: "+4",
    },
  ];

  const checkAll = (e) => {
    let v = false;
    if (e.target.checked) {
      v = true;
      setSelectState(!selectState);
    } else {
      v = false;
      setSelectState(!selectState);
    }
  };

  const handleDeleteOperation=(e)=>{
    let tempSet = resultSet.filter((data)=>
    data.id !=e.id);
    setResultSet(tempSet)
  }
  return (
    <div className="content-start">
      <div className="border-b-2 px-6 py-4 flex items-center text-center bg-slate-50 border-blue-100] ">
        <ListCaption
          dataLength={data && data.data && data.data.length}
        ></ListCaption>
      </div>
      <div className="border-b-2 py-5 px-10 flex text-gray-500 font-medium items-center text-center bg-gray-200 border-gray-300">
        <div className="flex gap-14 flex-[1.4]">
          {/* <CheckBox></CheckBox>  */}
          <input
            type="checkbox"
            name="all"
            onChange={(e) => checkAll(e)}
            className="bg-white shadow-md rounded-md border-gray-400 w-5 h-5 mr-3"
          />

          <div>Name</div>
        </div>
        <div className="flex flex-[1] ">
          <div>Status</div>
          <div
            onClick={() => {
              setArrowState(!arrowState);
              let length = resultSet.length;
              let reverseData = [];
              for (let i = length - 1; i >= 0; i--) {
                reverseData.push(resultSet[i]);
              }

              console.log(reverseData);
              setResultSet(reverseData);

              /* set the isSelect as true for all below checkboxes*/
            }}
          >
            {arrowState ? <UpArrow></UpArrow> : <DownArrow></DownArrow>}
          </div>
        </div>
        <div className="flex gap-2 flex-1 items-center justify-center relative">
          <div>Role</div>
          <div onMouseOver={(e) => setQueriesVisible(!queriesControl)} className="w-6 h-6 overflow-hidden">
            <QueriesIcon></QueriesIcon>
          </div>
          <div>
            {queriesControl ? (
              <div className="h-28 w-56 rounded-lg absolute -top-12 bg-gray-100 shadow-md text-sm p-5 text-gray-600 font-semibold">
                You can view the Team List members information in organized way.
              </div>
            ) : (
              ""
            )}
          </div>
        </div>

        <div className="flex flex-1 items-center justify-center">
          Email address
        </div>

        <div className="flex flex-1 items-center justify-center">Teams</div>

        <div className="flex flex-1"></div>
      </div>
      <div></div>

      {resultSet &&
        resultSet.map((member) => (
          <div className="border-b-2 py-5 px-10 flex text-gray-500 font-medium items-center text-center bg-white border-blue-100">
            <div className="flex gap-2 flex-[1.3]">
              <div class="flex items-center">
                {selectState ? (
                  <input
                    type="checkbox"
                    name="checkbox"
                    id="checkbox"
                    className="bg-white shadow-md rounded-md border-gray-400 w-5 h-5 mr-3"
                    checked
                  />
                ) : (
                  <input
                    type="checkbox"
                    name="checkbox"
                    id="checkbox"
                    className="bg-white shadow-md rounded-md border-gray-400 w-5 h-5 mr-3"
                  />
                )}

                {/* <CheckBox></CheckBox> */}
              </div>
              <div className="h-12 w-12 bg-gray-100 rounded-full flex items-center justify-center text-violet-900 font-medium ">
                {member.firstName.charAt(0) + "" + member.lastName.charAt(0)}
              </div>
              <div className="flex flex-col justify-start items-start">
                <div className="text-gray-800 font-semibold text-base">
                  {member.firstName + " " + member.lastName}
                </div>
                <div className="text-gray-400 font-normal text-base">
                  {member.handler}
                </div>
              </div>
            </div>
            <div className="flex flex-[1]">
              <div
                className={` rounded-full p-2 font-medium  text-sm flex gap-2 items-center justify-center ${
                  member.status
                    ? `bg-green-100 text-green-600 `
                    : `bg-yellow-100 text-yellow-600 `
                } `}
              >
                <div
                  className={`h-3 w-3 rounded-full ${
                    member.status ? `bg-green-400 ` : `bg-yellow-400`
                  } `}
                ></div>
                {member.status ? "Active" : "InActive"}
              </div>
            </div>
            <div className="flex flex-1">
              <TextData data={member.role}></TextData>
            </div>
            <div className="flex flex-1">
              <TextData data={member.email}></TextData>
            </div>
            <div className="flex gap-2 flex-[1]">
              {teams &&
                teams.map((data) => (
                  <Teams className={data.className} value={data.value}></Teams>
                ))}
            </div>
            <div className="flex gap-5 flex-2 px-4 justify-around">
              <div>
                <Popup
                  trigger={
                    <button>
                      <DeleteIcon></DeleteIcon>
                    </button>
                  }
                  position="right center"
                >
                  <div className="p-4 shadow-md rounded-xl border-2 border-gray-400 bg-gray-50">
                    <div className="font-medium text-lg text-gray-600">
                      Are you want to delete the member?
                    </div>
                    <div className="flex items-center justify-center gap-11">
                      <button
                        className=" bg-green-400 px-4 py-1 text-xl text-white font-semibold rounded-md"
                        onClick={(e)=>{
handleDeleteOperation(e)
                        }}
                      >
                        Yes
                      </button>
                      <button className=" bg-red-400 px-4 py-1 text-xl text-white font-semibold rounded-md">
                        No
                      </button>
                    </div>
                  </div>
                </Popup>
              </div>
              {/* <div><DeleteIcon></DeleteIcon></div>  */}
              <EditIcon></EditIcon>
            </div>
          </div>
        ))}
    </div>
  );
}
