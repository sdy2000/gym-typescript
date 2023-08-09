import { SelectedPage } from "@/shared/types";
import { motion } from "framer-motion";
import { HText } from "@/components";
import ClassSlider from "./ClassSlider";

type Props = { setSelectedPage: (value: SelectedPage) => void };

const OurClasses = ({ setSelectedPage }: Props) => {
  return (
    <section
      id="ourclasses"
      className="w-full bg-primary-100 py-40 overflow-hidden"
    >
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.OurClasses)}
      >
        <motion.div
          className="mx-auto w-5/6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <div className="md:w-3/5">
            <HText>OUR CLASSES</HText>
            <p className="py-5">
              Fringilla a sed at suspendisse ut enim volutpat. Rhoncus vel est
              tellus quam porttitor. Mauris velit euismod elementum arcu neque
              facilisi. Amet semper tortor facilisis metus nibh. Rhoncus sit
              enim mattis odio in risus nunc.
            </p>
          </div>
        </motion.div>
        <div className="mt-10 h-72 w-full flex justify-center items-center mx-8 self-center pr-8 xs:pr-16">
          <div className="w-[95%] overflow-hidden">
            <ClassSlider />
          </div>
        </div>
      </motion.div>
    </section>
  );
};
export default OurClasses;
