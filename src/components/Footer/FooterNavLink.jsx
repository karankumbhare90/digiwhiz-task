const FooterNavLink = ({ href, label, onClick }) => (
    <a
        href={href}
        onClick={(e) => {
            e.preventDefault();
            onClick(href);
        }}
        className={`relative flex items-center px-1 text-xs font-medium}`}
        style={{ overflow: 'visible' }}
    >

        <span>{label}</span>
    </a>
);

export default FooterNavLink