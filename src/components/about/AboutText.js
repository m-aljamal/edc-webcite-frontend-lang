import React from "react"
import ImageSlider from "../shared/ImageSlider"
import TextHolder from "./TextHolder"
export default function AboutText({ lang }) {
  const text = {
    ar: {
      one: `
        كما وجدت الهيئة – بالإضافة للحاجة إلى فرص تعليم متساوية – حاجةً ماسّة
        إلى الدّعم النفسيّ للأطفال والمدرّسين المقيمين في أماكن الحرب. ومن هنا
        عمدت الهيئةُ إلى دمج العمليّة التعليميّة والطرق النفسيّة الحديثة لمساعدة
        الأطفال على تجاوز الصدمات النفسيّة التي تعرّضوا لها، وبناء شخصيّاتهم
        ومساعدتهم على تحقيق طموحهم؛
        `,
      two: `
        ولتحقيق هذا الهدف، تعمل هيئة تطوير التعليم عن قرب مع خبراءَ في مجال
        التعليم والتطوير النفسيّ للأطفال، بالإضافة إلى منظّمات رائدة مختصّة في
        البلاد التي يتمّ العملُ فيها، من أجل تقديم أفضل الخدمات إلى تلك الشريحة
        ومراعاة الحساسيّة النفسيّة والاجتماعيّة التي يعاني منها هؤلاء الأطفال.
        
        `,
      three: `
        وتعمل هيئة تطوير التعليم أيضًا على دعم التعليم الرسميّ في المناطق
        المنكوبة وإنشاء مدارس نوعيّة لتقديم تعليم عالي الجودة، وافتتاح مراكز
        تعليميّة خاصّة بالأطفال الأيتام وأبناء الشهداء، تهدف إلى تأمين الرعاية
        التعليميّة والاجتماعيّة والصحّيّة للأطفال للأيتام في المدرسة، لتحقيق
        التكافل والرعاية الاجتماعيّة، ووضعهم في بيئة صحّية سليمة، وتخفيف وطأة
        الحرمان وهول المصيبة لديهم بعد فقدانهم لمن كان يعولهم ويرعاهم.
        `,
      four: `
        وتُدافعُ الهيئة بقوّة عن قيمها المتمثّلة في العدالة والمساواة والتطوير،
        ولا تنحاز إلى أيّة مجموعة سياسيّة في مناطق النزاع قيد العمل.
        `,
      five: `
        هيئة تطوير التعليم هي منظّمة غير حكوميّة وغير ربحيّة، تعمل على تطوير
        مناهج دراسيّة خاصّة للطلاب في مناطق الحروب والنزاعات، لتساعدهم على إدراك
        ما فاتهم من سنوات دراسيّة بسب الحروب. وجاءت فكرة تأسيس الهيئة من إيمان
        القائمين عليها بوجوب توفّر فرص التعليم النوعيّ لكافّةِ الأطفال الذين
        يقطنون في أماكن النزاعات، بغضّ النظر عن وضعهم الاجتماعيّ، وطبيعة النزاع
        السائد في مناطقهم.
        `,
    },
    en: {
      one: `
      In addition to the need for equal education opportunities, the commission also found an urgent need for psychological support for children and teachers residing in war zones. Hence, the commission has integrated the educational process and modern psychological methods to help children overcome the psychological trauma they have had, build their personalities, and help them achieve their ambitions. 
      `,

      two: `
      To achieve this goal, Education Development Commission works closely with experts in the field of education and psychological development for children, in addition to leading specialized organizations in the countries in which they are working, in order to provide the best services to this segment and take into account the psychological and social sensitivity of these children.
      `,
      three: `
      Education Development Commission also works to support formal education in stricken areas and establish quality schools to provide high quality education and start education centers for orphaned children and children of martyrs, aiming to provide educational, social and health care for orphans in school, to achieve solidarity and social care, and to place them in a healthy and sound environment, and to alleviate the burden of deprivation and the terrible calamity they have after their loss the one who used to sustain and care for them.
      `,
      four: `The commission vigorously defends its values of justice, equality, and development, and does not align itself with any political group working in conflict areas.`,
      five: `
      Education Development Commission is a non-governmental, non-profit organization that works to develop special curricula for students in war and conflict areas, to help them catch-up the years of school that they have missed due to wars. The idea of establishing the commission came from the belief of those in charge of it that quality education opportunities should be available to all children who live in conflict areas, regardless of their social status and the nature of the conflict prevailing in their areas. 
      `,
    },
  }
  const { one, two, three, four, five } = text[lang]
  return (
    <ImageSlider width="100%" arrowWidth="20px" noArrow showDots>
      <TextHolder>{one}</TextHolder>
      <TextHolder>{two}</TextHolder>
      <TextHolder>{three}</TextHolder>
      <TextHolder>{four}</TextHolder>
      <TextHolder>{five}</TextHolder>
    </ImageSlider>
  )
}
