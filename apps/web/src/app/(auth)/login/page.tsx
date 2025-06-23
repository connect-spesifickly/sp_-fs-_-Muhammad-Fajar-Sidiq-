import Image from "next/image";
import RegistrationForm from "./registration-form";

export default function RegisterPage() {
  return (
    <div className="h-screen ">
      <nav className="fixed top-0 left-0 flex items-center justify-start w-full p-4">
        <Image
          src="/easy-tech(logo).png"
          alt="Easy Tech"
          width={200}
          height={100}
          className="aspect-auto w-[120px] object-cover"
        />
      </nav>
      <div className="p-4 max-md:border-none max-md:shadow-none md:p-8">
        <RegistrationForm />
      </div>
    </div>
  );
}
