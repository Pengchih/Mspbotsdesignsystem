import svgPaths from "./svg-76pcpa5w5v";

function Button() {
  return (
    <div className="absolute bg-[#17b3a3] content-stretch flex h-[32px] items-center justify-center left-[332.05px] px-[17px] py-[5px] rounded-[3px] top-[65px] w-[77.891px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#17b3a3] border-solid inset-0 pointer-events-none rounded-[3px]" />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[21px] not-italic relative shrink-0 text-[#fcfcfc] text-[14px] text-center text-nowrap">Button</p>
    </div>
  );
}

function Text() {
  return (
    <div className="h-[21px] relative shrink-0 w-[67.484px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[21px] left-[34px] not-italic text-[#909398] text-[14px] text-center top-0 translate-x-[-50%] w-[68px]">Hide code</p>
      </div>
    </div>
  );
}

function Icon() {
  return (
    <div className="relative size-[15px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 15">
        <g id="Icon">
          <path clipRule="evenodd" d={svgPaths.p3fdd56f0} fill="var(--fill-0, #909398)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Button1() {
  return (
    <div className="absolute bg-[rgba(241,241,241,0.1)] content-stretch flex h-[43px] items-center justify-between left-0 pb-0 pt-px px-[21px] right-0 top-[161px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[#dcdfe6] border-[1px_0px_0px] border-solid inset-0 pointer-events-none" />
      <Text />
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none rotate-[180deg]">
          <Icon />
        </div>
      </div>
    </div>
  );
}

function CodeBlock() {
  return (
    <div className="h-[21.125px] relative shrink-0 w-full" data-name="Code Block">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[21.125px] left-0 not-italic text-[13px] text-[rgba(48,49,51,0.7)] text-nowrap top-px">{`<Button>Button</Button>`}</p>
    </div>
  );
}

function Container() {
  return (
    <div className="absolute bg-[rgba(241,241,241,0.05)] bottom-0 h-[79px] left-0 right-0" data-name="Container">
      <div className="content-stretch flex flex-col items-start overflow-clip pb-0 pt-[29px] px-[28px] relative rounded-[inherit] size-full">
        <CodeBlock />
      </div>
      <div aria-hidden="true" className="absolute border-[#dcdfe6] border-[1px_0px_0px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function ComponentSection() {
  return (
    <div className="bg-white h-[283px] relative rounded-[8px] shrink-0 w-[740px]" data-name="ComponentSection">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <Button />
        <Button1 />
        <Container />
      </div>
      <div aria-hidden="true" className="absolute border border-[#dcdfe6] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex flex-col gap-[7px] items-start relative shrink-0 w-full" data-name="Container">
      <h4 className="block font-['Raleway:SemiBold',sans-serif] font-semibold leading-[28px] relative shrink-0 text-[#303133] text-[20px] w-full">Variant</h4>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[22px] not-italic relative shrink-0 text-[#606266] text-[14px] w-full">Use the variant prop to control the visual style of the button.</p>
    </div>
  );
}

function Button2() {
  return (
    <div className="bg-[#17b3a3] content-stretch flex gap-[8px] h-[32px] items-center justify-center px-[16px] py-[4px] relative rounded-[4px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#17b3a3] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[22px] not-italic relative shrink-0 text-[14px] text-nowrap text-white">Primary</p>
    </div>
  );
}

function Button3() {
  return (
    <div className="bg-[#e8f7f6] content-stretch flex gap-[8px] h-[32px] items-center justify-center px-[16px] py-[4px] relative rounded-[4px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#8bd9d1] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[22px] not-italic relative shrink-0 text-[#17b3a3] text-[14px] text-nowrap">Secondary</p>
    </div>
  );
}

function Button4() {
  return (
    <div className="bg-white content-stretch flex gap-[8px] h-[32px] items-center justify-center px-[16px] py-[4px] relative rounded-[4px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#dcdfe6] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[22px] not-italic relative shrink-0 text-[#606266] text-[14px] text-nowrap">Outline</p>
    </div>
  );
}

function Button5() {
  return (
    <div className="bg-white content-stretch flex gap-[8px] h-[32px] items-center justify-center px-[16px] py-[4px] relative rounded-[4px] shrink-0" data-name="Button">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[22px] not-italic relative shrink-0 text-[#606266] text-[14px] text-nowrap">Ghost</p>
    </div>
  );
}

function ButtonShowcase() {
  return (
    <div className="absolute content-stretch flex gap-[14px] items-center left-1/2 top-[70px] translate-x-[-50%]" data-name="ButtonShowcase">
      <Button2 />
      <Button3 />
      <Button4 />
      <Button5 />
    </div>
  );
}

function Text1() {
  return (
    <div className="h-[21px] relative shrink-0 w-[73.625px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[21px] left-[37px] not-italic text-[#909398] text-[14px] text-center top-0 translate-x-[-50%] w-[74px]">Show code</p>
      </div>
    </div>
  );
}

function Icon1() {
  return (
    <div className="relative shrink-0 size-[15px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 15">
        <g id="Icon">
          <path clipRule="evenodd" d={svgPaths.p3fdd56f0} fill="var(--fill-0, #909398)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Button6() {
  return (
    <div className="absolute bg-[rgba(241,241,241,0.1)] content-stretch flex inset-[162px_0_0_0] items-center justify-between pb-0 pt-px px-[21px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[#dcdfe6] border-[1px_0px_0px] border-solid inset-0 pointer-events-none" />
      <Text1 />
      <Icon1 />
    </div>
  );
}

function Container2() {
  return (
    <div className="bg-white h-[205px] relative rounded-[8px] shrink-0 w-full" data-name="Container">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <ButtonShowcase />
        <Button6 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#dcdfe6] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function ComponentSection1() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-[740px]" data-name="ComponentSection">
      <Container1 />
      <Container2 />
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex flex-col gap-[7px] items-start relative shrink-0 w-full" data-name="Container">
      <h4 className="block font-['Raleway:SemiBold',sans-serif] font-semibold leading-[28px] relative shrink-0 text-[#303133] text-[20px] w-full">Size</h4>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[22px] not-italic relative shrink-0 text-[#606266] text-[14px] w-full">Use the size prop to control the size of the button.</p>
    </div>
  );
}

function Button7() {
  return (
    <div className="bg-[#17b3a3] h-[24px] relative rounded-[3px] shrink-0 w-[61.641px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#17b3a3] border-solid inset-0 pointer-events-none rounded-[3px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[13px] py-[3px] relative size-full">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[21px] not-italic relative shrink-0 text-[#fcfcfc] text-[14px] text-center text-nowrap">Small</p>
      </div>
    </div>
  );
}

function Button8() {
  return (
    <div className="basis-0 bg-[#17b3a3] grow h-[32px] min-h-px min-w-px relative rounded-[3px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#17b3a3] border-solid inset-0 pointer-events-none rounded-[3px]" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[17px] py-[5px] relative size-full">
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[21px] not-italic relative shrink-0 text-[#fcfcfc] text-[14px] text-center text-nowrap">Medium</p>
        </div>
      </div>
    </div>
  );
}

function Button9() {
  return (
    <div className="bg-[#17b3a3] h-[40px] relative rounded-[3px] shrink-0 w-[79.43px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#17b3a3] border-solid inset-0 pointer-events-none rounded-[3px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[21px] py-[9px] relative size-full">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[21px] not-italic relative shrink-0 text-[#fcfcfc] text-[14px] text-center text-nowrap">Large</p>
      </div>
    </div>
  );
}

function ButtonShowcase1() {
  return (
    <div className="absolute content-stretch flex gap-[14px] h-[40px] items-center left-[243px] top-[61px] w-[255.992px]" data-name="ButtonShowcase">
      <Button7 />
      <Button8 />
      <Button9 />
    </div>
  );
}

function Text2() {
  return (
    <div className="h-[21px] relative shrink-0 w-[73.625px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[21px] left-[37px] not-italic text-[#909398] text-[14px] text-center top-0 translate-x-[-50%] w-[74px]">Show code</p>
      </div>
    </div>
  );
}

function Icon2() {
  return (
    <div className="relative shrink-0 size-[15px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 15">
        <g id="Icon">
          <path clipRule="evenodd" d={svgPaths.p3fdd56f0} fill="var(--fill-0, #909398)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Button10() {
  return (
    <div className="absolute bg-[rgba(241,241,241,0.1)] bottom-0 content-stretch flex h-[43px] items-center justify-between left-0 pb-0 pt-px px-[21px] right-0" data-name="Button">
      <div aria-hidden="true" className="absolute border-[#dcdfe6] border-[1px_0px_0px] border-solid inset-0 pointer-events-none" />
      <Text2 />
      <Icon2 />
    </div>
  );
}

function Container4() {
  return (
    <div className="bg-white h-[205px] relative rounded-[8px] shrink-0 w-full" data-name="Container">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <ButtonShowcase1 />
        <Button10 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#dcdfe6] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function ComponentSection2() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-[740px]" data-name="ComponentSection">
      <Container3 />
      <Container4 />
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex flex-col gap-[7px] items-start relative shrink-0 w-full" data-name="Container">
      <h4 className="block font-['Raleway:SemiBold',sans-serif] font-semibold leading-[28px] relative shrink-0 text-[#303133] text-[20px] w-full">With icons</h4>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[22px] not-italic relative shrink-0 text-[#606266] text-[14px] w-full">You can insert icons directly inside the Button using leftIcon and rightIcon props.</p>
    </div>
  );
}

function Icon3() {
  return (
    <div className="basis-0 grow h-[15px] min-h-px min-w-px relative shrink-0" data-name="Icon">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <div className="absolute inset-[13.33%_20%_6.67%_20%]" data-name="Vector">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9 12">
            <path clipRule="evenodd" d={svgPaths.p2732f200} fill="var(--fill-0, #FCFCFC)" fillRule="evenodd" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Text3() {
  return (
    <div className="absolute content-stretch flex items-center left-[17px] size-[15px] top-[8.5px]" data-name="Text">
      <Icon3 />
    </div>
  );
}

function Button11() {
  return (
    <div className="bg-[#17b3a3] h-[32px] relative rounded-[3px] shrink-0 w-[100.891px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#17b3a3] border-solid inset-0 pointer-events-none rounded-[3px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Text3 />
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[21px] left-[62px] not-italic text-[#fcfcfc] text-[14px] text-center text-nowrap top-[5.5px] translate-x-[-50%]">Button</p>
      </div>
    </div>
  );
}

function Icon4() {
  return (
    <div className="basis-0 grow h-[15px] min-h-px min-w-px relative shrink-0" data-name="Icon">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <div className="absolute inset-[13.33%_20%_6.67%_20%]" data-name="Vector">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9 12">
            <path clipRule="evenodd" d={svgPaths.p2732f200} fill="var(--fill-0, #FCFCFC)" fillRule="evenodd" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Text4() {
  return (
    <div className="absolute content-stretch flex items-center left-[68.89px] size-[15px] top-[8.5px]" data-name="Text">
      <Icon4 />
    </div>
  );
}

function Button12() {
  return (
    <div className="basis-0 bg-[#17b3a3] grow h-[32px] min-h-px min-w-px relative rounded-[3px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#17b3a3] border-solid inset-0 pointer-events-none rounded-[3px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[21px] left-[39px] not-italic text-[#fcfcfc] text-[14px] text-center text-nowrap top-[5.5px] translate-x-[-50%]">Button</p>
        <Text4 />
      </div>
    </div>
  );
}

function ButtonShowcase2() {
  return (
    <div className="absolute content-stretch flex gap-[14px] h-[32px] items-start left-[263.11px] top-[65px] w-[215.781px]" data-name="ButtonShowcase">
      <Button11 />
      <Button12 />
    </div>
  );
}

function Text5() {
  return (
    <div className="h-[21px] relative shrink-0 w-[73.625px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[21px] left-[37px] not-italic text-[#909398] text-[14px] text-center top-0 translate-x-[-50%] w-[74px]">Show code</p>
      </div>
    </div>
  );
}

function Icon5() {
  return (
    <div className="relative shrink-0 size-[15px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 15">
        <g id="Icon">
          <path clipRule="evenodd" d={svgPaths.p3fdd56f0} fill="var(--fill-0, #909398)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Button13() {
  return (
    <div className="absolute bg-[rgba(241,241,241,0.1)] content-stretch flex h-[43px] items-center justify-between left-0 pb-0 pt-px px-[21px] right-0 rounded-[3px] top-[162px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[#dcdfe6] border-[1px_0px_0px] border-solid inset-0 pointer-events-none rounded-[3px]" />
      <Text5 />
      <Icon5 />
    </div>
  );
}

function Container6() {
  return (
    <div className="bg-white h-[205px] relative rounded-[8px] shrink-0 w-full" data-name="Container">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <ButtonShowcase2 />
        <Button13 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#dcdfe6] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function ComponentSection3() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-[740px]" data-name="ComponentSection">
      <Container5 />
      <Container6 />
    </div>
  );
}

function Container7() {
  return (
    <div className="content-stretch flex flex-col gap-[7px] items-start relative shrink-0 w-full" data-name="Container">
      <h4 className="block font-['Raleway:SemiBold',sans-serif] font-semibold leading-[28px] relative shrink-0 text-[#303133] text-[20px] w-full">Loading</h4>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[22px] not-italic relative shrink-0 text-[#606266] text-[14px] w-full">Use the loading prop to display a loading indicator.</p>
    </div>
  );
}

function Icon6() {
  return (
    <div className="relative size-[20.952px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20.952 20.952">
        <g id="Icon">
          <path clipRule="evenodd" d={svgPaths.p25b744c0} fill="var(--fill-0, #C0C4CC)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Button14() {
  return (
    <div className="bg-[#e8e8e8] h-[32px] relative rounded-[3px] shrink-0 w-[100.891px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#e8e8e8] border-solid inset-0 pointer-events-none rounded-[3px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <div className="absolute flex items-center justify-center left-[14.02px] size-[29.266px] top-[-11.43px]" style={{ "--transform-inner-width": "300", "--transform-inner-height": "150" } as React.CSSProperties}>
          <div className="flex-none rotate-[306deg]">
            <Icon6 />
          </div>
        </div>
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[21px] left-[62px] not-italic text-[#c0c4cc] text-[14px] text-center text-nowrap top-[5.5px] translate-x-[-50%]">Button</p>
      </div>
    </div>
  );
}

function Icon7() {
  return (
    <div className="relative size-[20.952px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20.9521 20.9521">
        <g id="Icon">
          <path clipRule="evenodd" d={svgPaths.p36fedc00} fill="var(--fill-0, #606266)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Button15() {
  return (
    <div className="bg-[#f2f2f7] h-[32px] opacity-50 relative rounded-[3px] shrink-0 w-[98.891px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <div className="absolute flex items-center justify-center left-[13.02px] size-[29.266px] top-[-11.43px]" style={{ "--transform-inner-width": "300", "--transform-inner-height": "150" } as React.CSSProperties}>
          <div className="flex-none rotate-[306deg]">
            <Icon7 />
          </div>
        </div>
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[21px] left-[61px] not-italic text-[#606266] text-[14px] text-center text-nowrap top-[5.5px] translate-x-[-50%]">Button</p>
      </div>
    </div>
  );
}

function Icon8() {
  return (
    <div className="relative size-[20.952px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20.9521 20.9521">
        <g id="Icon">
          <path clipRule="evenodd" d={svgPaths.p36fedc00} fill="var(--fill-0, #1C1C1E)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Button16() {
  return (
    <div className="basis-0 grow h-[32px] min-h-px min-w-px opacity-50 relative rounded-[3px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#dcdfe6] border-solid inset-0 pointer-events-none rounded-[3px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <div className="absolute flex items-center justify-center left-[14.02px] size-[29.266px] top-[-11.43px]" style={{ "--transform-inner-width": "300", "--transform-inner-height": "150" } as React.CSSProperties}>
          <div className="flex-none rotate-[306deg]">
            <Icon8 />
          </div>
        </div>
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[21px] left-[62px] not-italic text-[#1c1c1e] text-[14px] text-center text-nowrap top-[5.5px] translate-x-[-50%]">Button</p>
      </div>
    </div>
  );
}

function ButtonShowcase3() {
  return (
    <div className="absolute content-stretch flex gap-[14px] h-[32px] items-start left-[206.66px] top-[65px] w-[328.672px]" data-name="ButtonShowcase">
      <Button14 />
      <Button15 />
      <Button16 />
    </div>
  );
}

function Text6() {
  return (
    <div className="h-[21px] relative shrink-0 w-[73.625px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[21px] left-[37px] not-italic text-[#909398] text-[14px] text-center top-0 translate-x-[-50%] w-[74px]">Show code</p>
      </div>
    </div>
  );
}

function Icon9() {
  return (
    <div className="relative shrink-0 size-[15px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 15">
        <g id="Icon">
          <path clipRule="evenodd" d={svgPaths.p3fdd56f0} fill="var(--fill-0, #909398)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Button17() {
  return (
    <div className="absolute bg-[rgba(241,241,241,0.1)] content-stretch flex h-[43px] items-center justify-between left-px pb-0 pt-px px-[21px] right-[-1px] rounded-[3px] top-[161px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[#dcdfe6] border-[1px_0px_0px] border-solid inset-0 pointer-events-none rounded-[3px]" />
      <Text6 />
      <Icon9 />
    </div>
  );
}

function Container8() {
  return (
    <div className="bg-white h-[205px] relative rounded-[8px] shrink-0 w-full" data-name="Container">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <ButtonShowcase3 />
        <Button17 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#dcdfe6] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function ComponentSection4() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-[740px]" data-name="ComponentSection">
      <Container7 />
      <Container8 />
    </div>
  );
}

function Container9() {
  return (
    <div className="content-stretch flex flex-col gap-[7px] items-start relative shrink-0 w-full" data-name="Container">
      <h4 className="block font-['Raleway:SemiBold',sans-serif] font-semibold leading-[28px] relative shrink-0 text-[#303133] text-[20px] w-full">Disabled</h4>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[22px] not-italic relative shrink-0 text-[#606266] text-[14px] w-full">Use the disabled prop to prevent user interaction.</p>
    </div>
  );
}

function Button18() {
  return (
    <div className="bg-[#e8e8e8] h-[32px] relative rounded-[3px] shrink-0 w-[77.891px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#e8e8e8] border-solid inset-0 pointer-events-none rounded-[3px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[17px] py-[5px] relative size-full">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[21px] not-italic relative shrink-0 text-[#c0c4cc] text-[14px] text-center text-nowrap">Button</p>
      </div>
    </div>
  );
}

function Button19() {
  return (
    <div className="bg-[#f2f2f7] h-[32px] opacity-50 relative rounded-[3px] shrink-0 w-[75.891px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[16px] py-[4px] relative size-full">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[21px] not-italic relative shrink-0 text-[#606266] text-[14px] text-center text-nowrap">Button</p>
      </div>
    </div>
  );
}

function Button20() {
  return (
    <div className="basis-0 grow h-[32px] min-h-px min-w-px opacity-50 relative rounded-[3px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#dcdfe6] border-solid inset-0 pointer-events-none rounded-[3px]" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[17px] py-[5px] relative size-full">
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[21px] not-italic relative shrink-0 text-[#1c1c1e] text-[14px] text-center text-nowrap">Button</p>
        </div>
      </div>
    </div>
  );
}

function ButtonShowcase4() {
  return (
    <div className="absolute content-stretch flex gap-[14px] h-[32px] items-start left-[241.16px] top-[65px] w-[259.672px]" data-name="ButtonShowcase">
      <Button18 />
      <Button19 />
      <Button20 />
    </div>
  );
}

function Text7() {
  return (
    <div className="h-[21px] relative shrink-0 w-[73.625px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[21px] left-[37px] not-italic text-[#909398] text-[14px] text-center top-0 translate-x-[-50%] w-[74px]">Show code</p>
      </div>
    </div>
  );
}

function Icon10() {
  return (
    <div className="relative shrink-0 size-[15px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 15">
        <g id="Icon">
          <path clipRule="evenodd" d={svgPaths.p3fdd56f0} fill="var(--fill-0, #909398)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Button21() {
  return (
    <div className="absolute bg-[rgba(241,241,241,0.1)] content-stretch flex inset-[162px_0_0_0] items-center justify-between pb-0 pt-px px-[21px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[#dcdfe6] border-[1px_0px_0px] border-solid inset-0 pointer-events-none" />
      <Text7 />
      <Icon10 />
    </div>
  );
}

function Container10() {
  return (
    <div className="bg-white h-[205px] relative rounded-[8px] shrink-0 w-full" data-name="Container">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <ButtonShowcase4 />
        <Button21 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#dcdfe6] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function ComponentSection5() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-[740px]" data-name="ComponentSection">
      <Container9 />
      <Container10 />
    </div>
  );
}

function Container11() {
  return <div className="shrink-0 size-0" data-name="Container" />;
}

function Text8() {
  return (
    <div className="h-[21px] relative shrink-0 w-[42.492px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[21px] left-[43px] not-italic text-[#909398] text-[14px] text-nowrap text-right top-0 tracking-[1.4px] translate-x-[-100%] uppercase">Next</p>
      </div>
    </div>
  );
}

function Icon11() {
  return (
    <div className="absolute left-[37.15px] size-[15px] top-[3px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 15">
        <g id="Icon">
          <path clipRule="evenodd" d={svgPaths.p3e695ec0} fill="var(--fill-0, #303133)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Text9() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-[52.148px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[21px] left-0 not-italic text-[#303133] text-[14px] text-nowrap top-0">Input</p>
        <Icon11 />
      </div>
    </div>
  );
}

function Link() {
  return (
    <div className="h-[45.5px] relative shrink-0 w-[52.148px]" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[3.5px] items-end relative size-full">
        <Text8 />
        <Text9 />
      </div>
    </div>
  );
}

function Footer() {
  return (
    <div className="content-stretch flex h-[89px] items-center justify-between pb-0 pt-px px-0 relative shrink-0 w-[740px]" data-name="Footer">
      <div aria-hidden="true" className="absolute border-[#dcdfe6] border-[1px_0px_0px] border-solid inset-0 pointer-events-none" />
      <Container11 />
      <Link />
    </div>
  );
}

export default function MainContent() {
  return (
    <div className="relative size-full" data-name="Main Content">
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col gap-[40px] items-center p-[40px] relative size-full">
          <div className="h-[100dvh] shrink-0 tailwind w-[740px]" />
          <ComponentSection />
          <h3 className="block font-['Raleway:SemiBold',sans-serif] font-semibold leading-[32px] relative shrink-0 text-[#303133] text-[26px] w-[740px]">Examples</h3>
          <ComponentSection1 />
          <ComponentSection2 />
          <ComponentSection3 />
          <ComponentSection4 />
          <ComponentSection5 />
          <Footer />
        </div>
      </div>
    </div>
  );
}