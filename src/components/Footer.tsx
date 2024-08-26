import { Divider } from "antd";

export default function Footer() {
  return (
    <div className="bg-slate-100 w-full flex items-center justify-center">
      <div className="flex flex-col row items-center">
        <div className="flex w-full justify-between items-center">
          <h2>Antelope Enterprise Holdings Limited</h2>
          <a href="/">
            <img
              src = "https://res.cloudinary.com/aehl/image/upload/v1724428463/%E5%B0%8F%E9%BB%91%E8%89%B2.jpg_dsu0fh.png"
              alt = "logo"
              className = "h-full w-full"
            />
          </a>
        </div>
        <Divider className="my-2" />
        <div className="flex w-full justify-between space-x-16">
          <div className="text-start">
            <p>Phone: +1 (838) 500 - 8888</p>
            <p>
              Office: Suite 7540, The Empire State Building, 350 Fifth Ave, New
              York, NY, 10118
            </p>
          </div>
          <p className="text-end">Copyright ©2024 AEHL</p>
        </div>
      </div>
    </div>
  );
}
