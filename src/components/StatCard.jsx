import React from "react";
import { motion } from "framer-motion";
import { cn, formatNumber, getStatusColor, getStatusText } from "../utils";
import { useLanguage } from "../context/LanguageContext";
// Premium iconlar
import { MdTrendingUp, MdTrendingDown } from "react-icons/md";

const StatCard = ({
  title,
  value,
  subtitle,
  icon,
  trend,
  status,
  className,
  ...props
}) => {
  const { currentLanguage } = useLanguage();

  return (
    <motion.div
      whileHover={{ y: -2, scale: 1.02 }}
      transition={{ duration: 0.2, ease: "easeInOut" }}
      className={cn("stat-card", className)}
      {...props}
    >
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <p className="text-sm font-medium text-slate-600 mb-1">{title}</p>
          <p className="text-2xl font-bold text-slate-900">
            {typeof value === "number" ? formatNumber(value) : value}
          </p>
          {subtitle && (
            <p className="text-sm text-slate-500 mt-1">{subtitle}</p>
          )}
          {status && (
            <span
              className={cn("status-indicator mt-2", getStatusColor(status))}
            >
              {getStatusText(status, currentLanguage)}
            </span>
          )}
        </div>

        {icon && (
          <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl flex items-center justify-center text-white">
            {typeof icon === "string" ? (
              <span className="text-xl">{icon}</span>
            ) : (
              React.createElement(icon, { className: "w-6 h-6" })
            )}
          </div>
        )}
      </div>

      {trend && (
        <div className="mt-4 flex items-center">
          <span
            className={cn(
              "text-sm font-medium flex items-center",
              trend.direction === "up" ? "text-success-600" : "text-danger-600"
            )}
          >
            {trend.direction === "up" ? (
              <MdTrendingUp className="w-4 h-4 mr-1" />
            ) : (
              <MdTrendingDown className="w-4 h-4 mr-1" />
            )}
            {trend.value}
          </span>
          <span className="text-sm text-slate-500 ml-2">{trend.label}</span>
        </div>
      )}
    </motion.div>
  );
};

export default StatCard;
