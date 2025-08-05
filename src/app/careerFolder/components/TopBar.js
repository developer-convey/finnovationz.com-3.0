import { Phone } from "lucide-react";

export default function TopBar() {
  return (
    <div className="w-full bg-gradient-to-r from-teal-400 to-blue-500 p-2 text-white text-sm flex justify-center items-center">
      <Phone className="w-4 h-4 mr-2" />
      <span className="hidden sm:inline">For any query contact us on</span>
      <a href="tel:+918660163106" className="ml-2 hover:underline">
        +91 8660163106
      </a>
      <span className="mx-1">&</span>
      <a href="mailto:hr@finnovationz.com" className="hover:underline">
        hr@finnovationz.com
      </a>
    </div>
  );
}
