import React from "react";
import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  AccordionItem,
} from 'reactstrap';

const QuestionsComponent = () => {
  const [question, setQuestion] = React.useState([
    {
      id: "1",
      question: "Question 1",
      answer: "Answer for question number 1",
    },
    {
      id: "2",
      question: "Apakah boleh melamar posisi yang kualifikasi bidangnya berbeda dengan bidang saya?",
      answer: "Walaupun bidang atau jurusan Anda berbeda dengan yang dilamar, kami tetap membuka peluang bagi pelamar apabila memiliki pengalaman kerja di bidang serupa sebelumnya.",
    },
    {
      id: "3",
      question: "Apa saja tahap-tahap dalam proses rekrutmen YKBUT?",
      answer: "Tahap-tahap dalam rekrutmen UT adalah seleksi administrasi, psikotes, wawancara dan tes kesehatan. Setiap tahapnya berlaku sistem gugur.",
    },
    {
      id: "4",
      question: "Berapa usia maksimal untuk melamar pekerjaan di YKBUT?",
      answer: "Tergantung lowongan yang sedang dicari, umumnya untuk lowongan fresh graduate kami menerima lamaran pekerja berusia maksimal 26 tahun",
    },
    {
      id: "5",
      question: "Berapa lama kandidat akan dihubungi setelah menjalani satu tahap seleksi?",
      answer: "Kami akan menghubungi kandidat maksimal 2 minggu dari tahap seleksi sebelumnya.",
    },
  ]);
  const [open, setOpen] = React.useState('1');
  const toggle = (id) => {
    if (open === id) {
      setOpen();
    } else {
      setOpen(id);
    }
  };

  return (
    <div className="container container-sm mt-5 mb-5">
      <h2 className="title mb-5">TANYA & JAWAB</h2>
      <Accordion className="mt-2" open={open} toggle={toggle}>
        {question.map((data) => (
        <AccordionItem>
          <AccordionHeader targetId={data.id}>{data.question}</AccordionHeader>
          <AccordionBody accordionId={data.id}>
            {data.answer}
          </AccordionBody>
        </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default QuestionsComponent;
