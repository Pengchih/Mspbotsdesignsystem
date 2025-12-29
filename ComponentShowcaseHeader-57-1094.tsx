import svgPaths from "./svg-ajc81a2it7";
import { defineProperties } from "figma:react";

function Paragraph({ description }) {
  return (
    <div className="h-[21px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[22px] left-0 not-italic text-[#606266] text-[14px] text-nowrap top-0">{description}</p>
    </div>
  );
}

function Icon() {
  return (
    <div className="absolute left-0 size-[15px] top-[3px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 15">
        <g id="Icon">
          <path clipRule="evenodd" d={svgPaths.p91a0580} fill="var(--fill-0, #303133)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Link() {
  return (
    <div className="absolute h-[21px] left-0 top-0 w-[103px]" data-name="Link">
      <Icon />
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[21px] left-[22px] not-italic text-[#303133] text-[14px] text-nowrap top-0">View source</p>
    </div>
  );
}

function Icon1() {
  return (
    <div className="absolute left-0 size-[15px] top-[3px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 15">
        <g id="Icon">
          <path clipRule="evenodd" d={svgPaths.pdbd6100} fill="var(--fill-0, #303133)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Link1() {
  return (
    <div className="absolute h-[21px] left-[131px] top-0 w-[124.898px]" data-name="Link">
      <Icon1 />
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[21px] left-[22px] not-italic text-[#303133] text-[14px] text-nowrap top-0">Report an issue</p>
    </div>
  );
}

function Icon2() {
  return (
    <div className="absolute left-0 size-[15px] top-[3px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 15">
        <g id="Icon">
          <path clipRule="evenodd" d={svgPaths.p22f94e00} fill="var(--fill-0, #303133)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Link2() {
  return (
    <div className="absolute h-[21px] left-[283.9px] top-0 w-[147.922px]" data-name="Link">
      <Icon2 />
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[21px] left-[22px] not-italic text-[#303133] text-[14px] text-nowrap top-0">View in Playground</p>
    </div>
  );
}

function Container() {
  return (
    <div className="h-[21px] relative shrink-0 w-full" data-name="Container">
      <Link />
      <Link1 />
      <Link2 />
    </div>
  );
}

export default function Header({ headerTitle = "Button", description = "Trigger an action or event, such as submitting a form or displaying a dialog." }) {
  return (
    <header className="content-stretch flex flex-col gap-[21px] items-start p-0 relative size-full" data-name="Header">
      <h2 className="block font-['Raleway:SemiBold',sans-serif] font-semibold leading-[36px] relative shrink-0 text-[#303133] text-[36px] text-nowrap">{headerTitle}</h2>
      <Paragraph description={description} />
      <Container />
    </header>
  );
}

defineProperties(Header, {
  headerTitle: {
    label: "Header Title",
    type: "string",
    defaultValue: "Button"
  },
  description: {
    label: "Description Text",
    type: "string",
    defaultValue: "Trigger an action or event, such as submitting a form or displaying a dialog."
  }
});