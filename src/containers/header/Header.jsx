import React from "react";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { CiSearch } from "react-icons/ci";


import "./header.css";

const Header = () => {
  return (
    <div className="rent2go__header section__padding section__no-bg" id="home">
      <div className="rent2go__header-content">
        <div className="search__text">
          <h3 className="">Araç Kiralama</h3>
          <p>Hayalindeki Aracı Al ve Git</p>
        </div>

        <div className="rent2go__header-content__input">
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer components={['DatePicker']}>
              <DatePicker label="Başlangıç Tarihi" />
            </DemoContainer>
          </LocalizationProvider>

          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer components={['DatePicker']}>
              <DatePicker label="Bitiş Tarihi" />
            </DemoContainer>
          </LocalizationProvider>

          <button className="search-btn" type="button"><CiSearch /> Ara</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
